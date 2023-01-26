import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, HttpClientModule, TaskRoutingModule],
})
export class TaskModule {}
