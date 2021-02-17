import { Component, Input } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-section-response',
  templateUrl: './section-response.component.html',
  styleUrls: ['./section-response.component.scss']
})
export class SectionResponseComponent {
  @Input() response: HttpResponse<any> | HttpErrorResponse;
  @Input() file: boolean;

  convertStatus(): string {
    switch (this.response.status) {
      case 201: return 'CREATED';
      case 300: return 'NOT MODIFIED';
      case 400: return 'BAD REQUEST';
      case 401: return 'UNAUTHORIZED';
      case 403: return 'FORBIDDEN';
      case 404: return 'NOT FOUND';
      case 405: return 'METHOD NOT ALLOWED';
      case 500: return 'INTERNAL SERVER ERROR';
    }

    return this.response.statusText;
  }

  openFile() {
    window.open(window.URL.createObjectURL(this.response['body']));
  }

}
