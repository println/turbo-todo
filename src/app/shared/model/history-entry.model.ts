import { SimpleDate } from '../functions';
import { Task } from './task.model';

export interface HistoryEntry {
  id: string;
  date: SimpleDate;
  tasks: Array<Task['id']>;
}
