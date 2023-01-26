export interface Item {
  id: string;
  name: string;
  type: ItemType;
  parent?: Item['id'] | null;
}

export enum ItemType {
  CATEGORY = 'CATEGORY',
  GROUP = 'GROUP',
  TASK = 'TASK',
}
