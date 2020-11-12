import { Component, Input } from '@angular/core';
import { RestModel } from '../../core/models/rest.model';

@Component({
  selector: 'app-list-rest',
  templateUrl: './list-rest.component.html',
  styleUrls: ['./list-rest.component.scss']
})
export class ListRestComponent {
  @Input() src: Array<RestModel>;
}
