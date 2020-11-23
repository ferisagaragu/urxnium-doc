import { Component, Input } from '@angular/core';
import { ExampleCodeModel } from '../../../core/models/example-code.model';

@Component({
  selector: 'app-highlight-code',
  templateUrl: './highlight-code.component.html',
  styleUrls: ['./highlight-code.component.scss']
})
export class HighlightCodeComponent {
  @Input() exampleCodes: Array<ExampleCodeModel>;
}
