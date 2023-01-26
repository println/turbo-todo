import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, DomainRoutingModule],
})
export class DomainModule {}
