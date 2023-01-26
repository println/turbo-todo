import { Component } from '@angular/core';
import { HistoryQuery, HistoryService } from '@shared/states/history';
import { SnapshotQuery } from '@shared/states/snapshot/snapshot.query';
import { SnapshotService } from '@shared/states/snapshot/snapshot.service';
import { TaskRepository } from '@shared/states/tasks/task.repository';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss'],
})
export class GroupDetailComponent {
  constructor(
    public taskRepository: TaskRepository,
    public historyQuery: HistoryQuery,
    public historyService: HistoryService,
    public snapshotQuery: SnapshotQuery,
    public snapshotService: SnapshotService
  ) {}

  addCategory(name: string) {
    this.taskRepository.addCategory(name);
  }

  addGroup(name: string, categoryId: any) {
    this.taskRepository.addGroup(name, categoryId);
  }

  addTask(name: string, groupId: any) {
    this.taskRepository.addTask(name, groupId);
  }
}
