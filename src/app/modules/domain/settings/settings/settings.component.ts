import { Component } from '@angular/core';
import { HistoryQuery, HistoryService } from '@shared/states/history';
import { SnapshotQuery, SnapshotService } from '@shared/states/snapshot';
import { TaskRepository } from '@shared/states/tasks';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  models = {
    categoryName: '',
    groupName: '',
    taskName: '',
  };

  constructor(
    public taskRepository: TaskRepository,
    public historyQuery: HistoryQuery,
    public historyService: HistoryService,
    public snapshotQuery: SnapshotQuery,
    public snapshotService: SnapshotService
  ) {}

  addCategory(name: string) {
    this.taskRepository.addCategory(name);
    this.models.categoryName = '';
  }

  addGroup(name: string, categoryId: any) {
    this.taskRepository.addGroup(name, categoryId);
    this.models.groupName = '';
  }

  addTask(name: string, groupId: any) {
    this.taskRepository.addTask(name, groupId);
    this.models.taskName = '';
  }

  renameItem(id: string, newName: string) {
    this.taskRepository.updateItem(id, newName);
  }

  removeItem(id: string) {
    this.taskRepository.removeItem(id);
  }
}
