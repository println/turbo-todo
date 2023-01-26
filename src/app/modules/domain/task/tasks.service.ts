import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskRepository } from '@shared/states/tasks';

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private http: HttpClient, private repo: TaskRepository) {}
}
