import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestRoutingModule } from './rest-routing.module';
import { RestComponent } from './rest.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RestComponent],
  imports: [
    CommonModule,
    RestRoutingModule,
    SharedModule
  ]
})
export class RestModule { }
