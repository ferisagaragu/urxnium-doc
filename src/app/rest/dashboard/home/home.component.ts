import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../../core/services/json.service';
import { DocModel } from '../../../core/models/doc.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  doc: DocModel;

  constructor(private jsonService: JsonService) {
    this.doc = null;
  }

  ngOnInit(): void {
    this.jsonService.getData('rest').subscribe(resp => {
      this.doc = resp;
    });
  }

}
