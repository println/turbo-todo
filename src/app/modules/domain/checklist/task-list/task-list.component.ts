import { Component } from '@angular/core';
import { Item, Task } from '@shared/model';
import { SnapshotQuery } from '@shared/states/snapshot';
import { TaskRepository } from '@shared/states/tasks';
import { UiUtils } from '@shared/states/tasks/ui-utils';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  date = new Date().toLocaleDateString();

  constructor(public taskRepository: TaskRepository, public snapshotQuery: SnapshotQuery) {}

  toggle(task: Item & UiUtils.State) {
    if (task.active) {
      this.taskRepository.undoneTask(task.id);
    } else {
      this.taskRepository.doneTask(task.id);
    }
  }
}
