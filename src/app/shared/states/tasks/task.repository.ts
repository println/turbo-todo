import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import {
  addEntities,
  deleteEntities,
  selectEntities,
  selectManyByPredicate,
  UIEntitiesRef,
  unionEntities,
  updateEntities,
  withEntities,
  withUIEntities,
} from '@ngneat/elf-entities';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { Item, ItemType, Task } from '@shared/model';
import { map } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { UiUtils } from './ui-utils';

const taskStore = createStore(
  { name: 'task' },
  withEntities<Item>(),
  withUIEntities<UiUtils.State>()
);

const persist = persistState(taskStore, {
  key: 'task-data',
  storage: localStorageStrategy,
});

@Injectable({ providedIn: 'root' })
export class TaskRepository {
  private uiStates$ = taskStore.pipe(selectEntities({ ref: UIEntitiesRef }));
  private category$ = taskStore.pipe(
    selectManyByPredicate((entity) => entity.type === ItemType.CATEGORY)
  );
  private group$ = taskStore.pipe(
    selectManyByPredicate((entity) => entity.type === ItemType.GROUP)
  );
  private task$ = taskStore.pipe(selectManyByPredicate((entity) => entity.type === ItemType.TASK));

  categoryItems$ = taskStore
    .combine({ entities: this.category$, UIEntities: this.uiStates$ })
    .pipe(unionEntities());
  groupItems$ = taskStore
    .combine({ entities: this.group$, UIEntities: this.uiStates$ })
    .pipe(unionEntities());
  taskItems$ = taskStore
    .combine({ entities: this.task$, UIEntities: this.uiStates$ })
    .pipe(unionEntities());
  activeTasks$ = this.taskItems$.pipe(map((items) => items.filter((t) => t.active)));

  addCategory(id: string) {
    this.addItem(id, ItemType.CATEGORY);
  }

  addGroup(id: string, parentId: string) {
    this.addItem(id, ItemType.GROUP, parentId);
  }

  addTask(id: string, parentId: string) {
    this.addItem(id, ItemType.TASK, parentId);
  }

  updateItem(id: string, name: string) {
    taskStore.update(updateEntities([id], (entity) => ({ ...entity, name: name })));
  }

  removeItem(id: string) {
    if (UiUtils.Functions.isActive(id, taskStore)) {
      return;
    }

    let entity = this.getValue().entities[id];
    taskStore.update(deleteEntities(id));

    if (entity.parent) {
      taskStore.update(UiUtils.Reducers.setActive(entity.parent, this.hasChild(entity.parent)));
    }
  }

  doneTask(id: Task['id']) {
    taskStore.update(UiUtils.Reducers.on(id));
  }

  undoneTask(id: Task['id']) {
    taskStore.update(UiUtils.Reducers.off(id));
  }

  releaseAllTasks() {
    let ids = this.getActiveItemIds(ItemType.TASK);
    taskStore.update(UiUtils.Reducers.offAll(ids));
  }

  private addItem(name: string, type: ItemType, parent?: Item['id'] | null) {
    const item = { id: uuid(), name: name, type: type, parent: parent };

    taskStore.update(addEntities(item));

    if (parent) {
      taskStore.update(UiUtils.Reducers.on(parent));
    }
  }

  private hasChild(parent: string): boolean {
    return this.getItems().some((i) => i.parent == parent);
  }

  private getActiveItemIds(type?: ItemType) {
    return this.getActiveItems(type).map((i) => i.id);
  }

  private getActiveItems(type?: ItemType) {
    let activeIds = this.getValue().UIIds;
    return this.getItems(type).filter((item) => activeIds.includes(item.id));
  }

  private getItems(type?: ItemType) {
    let items = Object.values(this.getValue().entities);
    return type ? items.filter((i) => i.type == type) : items;
  }

  private getValue() {
    return taskStore.getValue();
  }
}
