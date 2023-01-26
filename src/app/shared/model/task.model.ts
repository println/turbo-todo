import { Item, ItemType } from './item.model';

export interface Task extends Item {
  type: ItemType.TASK;
}
