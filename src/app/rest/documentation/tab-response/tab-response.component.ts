import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-response',
  templateUrl: './tab-response.component.html',
  styleUrls: ['./tab-response.component.scss']
})
export class TabResponseComponent {
  @Input() responseOk: object;
  @Input() responseCreated: object;
  @Input() responseNotModified: object;
  @Input() responseBadRequest: object;
  @Input() responseUnauthorized: object;
  @Input() responseForbidden: object;
  @Input() responseInternalServerError: object;
}
