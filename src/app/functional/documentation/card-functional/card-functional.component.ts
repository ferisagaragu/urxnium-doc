import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '../../../core/services/json.service';
import { FunctionalElementModel } from '../../../core/models/functional-element.model';

@Component({
  selector: 'app-card-functional',
  templateUrl: './card-functional.component.html',
  styleUrls: ['./card-functional.component.scss']
})
export class CardFunctionalComponent implements OnInit {

  doc: FunctionalElementModel;
  controllerName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private jsonService: JsonService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.controllerName = params.controllerName

      this.jsonService.findRestElementByName(params.name, 'functional')
        .subscribe(resp => {
          this.doc = resp;
        });
    });
  }

}
