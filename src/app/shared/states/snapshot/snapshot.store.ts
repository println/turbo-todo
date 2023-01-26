import { createStore, withProps } from '@ngneat/elf';
import { withEntities } from '@ngneat/elf-entities';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { Snapshot, HistoryEntry } from '@shared/model';
import { buildSimpleDate } from '../../functions';

export const snapshotStore = createStore(
  { name: 'snapshot' },
  withProps<Snapshot>({ date: buildSimpleDate(), tasks: [] })
);

const persist = persistState(snapshotStore, {
  key: 'snapshot-data',
  storage: localStorageStrategy,
});
