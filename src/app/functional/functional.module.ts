import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionalRoutingModule } from './functional-routing.module';
import { FunctionalComponent } from './functional.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FunctionalComponent],
  imports: [
    CommonModule,
    FunctionalRoutingModule,
    SharedModule
  ]
})
export class FunctionalModule { }
