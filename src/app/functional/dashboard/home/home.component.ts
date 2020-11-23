import { Component, OnInit } from '@angular/core';
import { DocModel } from '../../../core/models/doc.model';
import { JsonService } from '../../../core/services/json.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  doc: DocModel;
  version: string;

  constructor(private jsonService: JsonService) {
    this.doc = null;
    this.version = environment.version;
  }

  ngOnInit(): void {
    this.jsonService.getData('functional').subscribe(resp => {
      this.doc = resp;
    });
  }

}
