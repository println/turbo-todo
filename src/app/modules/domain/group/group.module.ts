import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupListComponent } from './group-list/group-list.component';

import { GroupRoutingModule } from './group-routing.module';

@NgModule({
  declarations: [GroupListComponent, GroupDetailComponent],
  imports: [CommonModule, FormsModule, GroupRoutingModule],
})
export class GroupModule {}
