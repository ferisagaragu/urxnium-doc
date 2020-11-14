import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { ServiceComponent } from './service/service.component';
import { SharedModule } from '../../shared/shared.module';
import { TabResponseComponent } from './tab-response/tab-response.component';
import { ChipPermissionComponent } from './chip-permission/chip-permission.component';
import { FormRequestComponent } from './form-request/form-request.component';
import { SectionAuthorizationComponent } from './section-authorization/section-authorization.component';
import { SectionResponseComponent } from './section-response/section-response.component';

@NgModule({
  declarations: [
    ServiceComponent,
    TabResponseComponent,
    ChipPermissionComponent,
    FormRequestComponent,
    SectionAuthorizationComponent,
    SectionResponseComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    SharedModule
  ]
})
export class DocumentationModule { }
