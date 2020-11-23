import { Component, Input } from '@angular/core';
import { AttributeModel } from '../../../core/models/attribute.model';

@Component({
  selector: 'app-table-attribute',
  templateUrl: './table-attribute.component.html',
  styleUrls: ['./table-attribute.component.scss']
})
export class TableAttributeComponent {

  @Input() attributes: Array<AttributeModel>;
  displayedColumns: string[] = ['name', 'type', 'description', 'default'];

  constructor() {
    this.attributes = [];
  }

}
