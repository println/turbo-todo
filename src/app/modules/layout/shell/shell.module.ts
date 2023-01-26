import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';

@NgModule({
  imports: [CommonModule, NgbModule, RouterModule],
  declarations: [ShellComponent],
})
export class ShellModule {}
