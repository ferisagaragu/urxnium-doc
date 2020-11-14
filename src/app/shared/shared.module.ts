import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ListRestComponent } from './list-rest/list-rest.component';

import { HighlightDirective } from '../core/directives/highlight.directive';
import { HighlightEditorDirective } from '../core/directives/highlight-editor.directive';

import { JsonFormatPipe } from '../core/pipes/json-format.pipe';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SidebarComponent,
    ListRestComponent,
    HighlightDirective,
    HighlightEditorDirective,
    JsonFormatPipe
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatRippleModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  exports: [
    SidebarComponent,
    HighlightDirective,
    HighlightEditorDirective,
    JsonFormatPipe,
    InlineSVGModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatRippleModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule
  ]
})
export class SharedModule { }
