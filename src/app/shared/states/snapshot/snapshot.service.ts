import { Injectable } from '@angular/core';
import { buildSimpleDate, isBefore } from '@shared/functions';
import { Task } from '@shared/model';
import { HistoryService } from '../history';
import { TaskRepository } from '../tasks/task.repository';
import { snapshotStore } from './snapshot.store';

@Injectable({ providedIn: 'root' })
export class SnapshotService {
  constructor(protected historyService: HistoryService, protected todoRepository: TaskRepository) {
    todoRepository.activeTasks$.subscribe((items: any[] | Task[]) => {
      this.updateSnapshot(items);
    });
  }

  renewStore() {
    let oldValues = { ...snapshotStore.getValue() };
    this.historyService.archive(oldValues);
    snapshotStore.update((state) => ({ date: buildSimpleDate(), tasks: [] }));
    this.todoRepository.releaseAllTasks();
  }

  private updateSnapshot(activeTasks: Task[]) {
    snapshotStore.update((state) => ({
      ...state,
      tasks: activeTasks,
    }));
  }

  private checkConsistency() {
    let storeDate = snapshotStore.getValue().date;
    if (isBefore(storeDate)) {
      this.renewStore();
    }
  }
}
