import { Task } from './task.model';

export interface DoneTasks {
  id: string;
  date: string;
  tasks: Array<Task['id']>;
}
