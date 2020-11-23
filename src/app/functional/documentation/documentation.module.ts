import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { CardFunctionalComponent } from './card-functional/card-functional.component';
import { SharedModule } from '../../shared/shared.module';
import { HighlightCodeComponent } from './highlight-code/highlight-code.component';
import { TableAttributeComponent } from './table-attribute/table-attribute.component';

@NgModule({
  declarations: [CardFunctionalComponent, HighlightCodeComponent, TableAttributeComponent],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    SharedModule
  ]
})
export class DocumentationModule { }
