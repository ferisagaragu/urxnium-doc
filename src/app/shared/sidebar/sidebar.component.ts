import { Component, Input, OnInit } from '@angular/core';
import { JsonService } from '../../core/services/json.service';
import { DocModel } from '../../core/models/doc.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() docType: string;
  doc: DocModel;

  constructor(private jsonService: JsonService) {
    this.doc = null;
    this.docType = '';
  }

  ngOnInit(): void {
    this.jsonService.getData(this.docType).subscribe(resp => {
      this.doc = resp;
    });
  }

}
