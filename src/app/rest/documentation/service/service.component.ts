import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../../core/services/json.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestElementModel } from '../../../core/models/rest-element.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  controllerName: string;
  doc: RestElementModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private jsonService: JsonService
  ) {
    this.controllerName = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.controllerName = params.controllerName;

      this.jsonService.findRestElementByMapping(params.mapping, 'rest')
        .subscribe(resp => {
          this.doc = resp;

          console.log(resp);
        });
    })
  }

}
