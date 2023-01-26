import {
  deleteEntities,
  UIEntitiesRef,
  updateEntities,
  upsertEntities,
} from '@ngneat/elf-entities';
import { Reducer } from '@ngneat/elf/lib/store';
import { ItemType } from '../../model';

export namespace UiUtils {
  export interface State {
    id: string;
    active: boolean;
  }

  export namespace Reducers {
    export function on(id: string): Reducer<any> {
      return upsertEntities({ id: id, active: true }, { ref: UIEntitiesRef });
    }

    export function off(id: string): Reducer<any> {
      return offAll([id]);
    }

    export function setActive(id: string, isActive: boolean): Reducer<any> {
      return updateEntities([id], { active: isActive }, { ref: UIEntitiesRef });
    }

    export function offAll(ids: Array<string>): Reducer<any> {
      return deleteEntities(ids, { ref: UIEntitiesRef });
    }
  }

  export namespace Functions {
    export function isActive(id: string, store: any): boolean {
      let ui = store.getValue().UIEntities[id];
      return !!ui && ui.active;
    }
  }
}
