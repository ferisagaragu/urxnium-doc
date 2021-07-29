import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListDocumentationComponent } from './list-documentation/list-documentation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListDocumentationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
