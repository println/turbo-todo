import { SimpleDate } from '@shared/functions';
import { Item } from './item.model';

export interface Snapshot {
  date: SimpleDate;
  tasks: Array<Item>;
}
