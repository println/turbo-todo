import { Injectable } from '@angular/core';
import { selectAllEntities } from '@ngneat/elf-entities';
import { historyStore } from './history.store';

@Injectable({ providedIn: 'root' })
export class HistoryQuery {
  historyEntries$ = historyStore.pipe(selectAllEntities());
}
