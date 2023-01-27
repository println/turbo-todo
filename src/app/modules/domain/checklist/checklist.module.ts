import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChecklistRoutingModule } from './checklist-routing.module';
import { TaskListComponent } from './task-list/task-list.component';


@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    ChecklistRoutingModule
  ]
})
export class ChecklistModule { }
