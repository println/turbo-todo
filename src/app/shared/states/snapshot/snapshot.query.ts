import { Injectable } from '@angular/core';
import { snapshotStore } from './snapshot.store';

@Injectable({ providedIn: 'root' })
export class SnapshotQuery {
  snapshot$ = snapshotStore.pipe();
}
