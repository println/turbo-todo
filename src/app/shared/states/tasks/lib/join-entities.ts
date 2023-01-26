import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

export function joinOneToOneEntities<
  T extends {
    entities: Record<string, any>[];
    joinEntities: Record<string, any>[];
  }
>(
  joinKey: string,
  idKey: keyof T['joinEntities'][0] = 'id'
): OperatorFunction<T, Array<T['entities'][0] & T['joinEntities'][0]>> {
  return map((state: T) => {
    return state.entities.map((entity) => {
      return {
        ...entity,
        [joinKey]: state.joinEntities.find((e) => e[idKey as string] == entity[joinKey]),
      };
    });
  });
}

export function joinOneToManyEntities<
  T extends {
    entities: Record<string, any>[];
    joinEntities: Record<string, any>[];
  }
>(
  joinKey: string,
  idKey: keyof T['joinEntities'][0] = 'id'
): OperatorFunction<T, Array<T['entities'][0] & T['joinEntities'][0]>> {
  return map((state: T) => {
    return state.entities.map((entity) => {
      return {
        ...entity,
        [joinKey]: (entity[joinKey] as any[]).map((k) =>
          state.joinEntities.find((e) => e[idKey as string] == k)
        ),
      };
    });
  });
}
