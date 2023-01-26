import { createStore } from '@ngneat/elf';
import { withEntities } from '@ngneat/elf-entities';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { HistoryEntry } from '@shared/model';

export const historyStore = createStore({ name: 'history' }, withEntities<HistoryEntry>());

const persist = persistState(historyStore, {
  key: 'history-data',
  storage: localStorageStrategy,
});
