import { Injectable } from '@angular/core';
import { addEntities, deleteAllEntities } from '@ngneat/elf-entities';
import { Snapshot, HistoryEntry } from '@shared/model';
import { historyStore } from './history.store';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  archive(snapshot: Snapshot) {
    let entry: HistoryEntry = {
      id: Math.random().toString(),
      date: snapshot.date,
      tasks: snapshot.tasks.map((t) => t.id),
    };
    historyStore.update(addEntities(entry));
  }

  clear() {
    historyStore.update(deleteAllEntities());
  }
}
