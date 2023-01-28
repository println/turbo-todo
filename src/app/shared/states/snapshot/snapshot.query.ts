import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Item, ItemType } from '../../model';
import { TaskRepository } from '../tasks';
import { UiUtils } from '../tasks/ui-utils';
import { snapshotStore } from './snapshot.store';

export interface SnapshotItem extends Item, UiUtils.State {
  children: SnapshotItem[];
}

@Injectable({ providedIn: 'root' })
export class SnapshotQuery {
  snapshot$ = snapshotStore.pipe();
  taskList$ = this.taskRepository.items$.pipe(
    map((items: (Item & UiUtils.State)[]) => this.restructure(items))
  );

  constructor(protected taskRepository: TaskRepository) {}

  private restructure(items: (Item & UiUtils.State)[]) {
    const snapshotItems: SnapshotItem[] = items.map((i) => ({ ...i, children: [] }));

    const snapshotItemsMap: { [key: string]: SnapshotItem } = snapshotItems
      .map((i) => ({ [i.id]: i }))
      .reduce((map, obj) => {
        let k = Object.keys(obj)[0];
        map[k] = obj[k];
        return map;
      }, {});

    const snapshotItemsReversed = [...snapshotItems].reverse();

    snapshotItemsReversed
      .filter((i) => !!i.parent)
      .forEach((i) => {
        snapshotItemsMap[i.parent as any].children.push(i);
      });

    return snapshotItems.filter((i) => i.type == ItemType.CATEGORY);
  }
}
