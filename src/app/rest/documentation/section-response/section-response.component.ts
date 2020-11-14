import { Component, Input } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-section-response',
  templateUrl: './section-response.component.html',
  styleUrls: ['./section-response.component.scss']
})
export class SectionResponseComponent {
  @Input() response: HttpResponse<any> | HttpErrorResponse;
}
