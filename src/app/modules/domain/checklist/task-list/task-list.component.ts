import { Component } from '@angular/core';
import { Item, Task } from '@shared/model';
import { TaskRepository } from '@shared/states/tasks';
import { UiUtils } from '@shared/states/tasks/ui-utils';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  constructor(public taskRepository: TaskRepository) {}

  toggle(task: Item & UiUtils.State) {
    if (task.active) {
      this.taskRepository.undoneTask(task.id);
    } else {
      this.taskRepository.doneTask(task.id);
    }
  }
}
