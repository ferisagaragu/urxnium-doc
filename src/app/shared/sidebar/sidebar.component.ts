import { Component, Input, OnInit } from '@angular/core';
import { JsonService } from '../../core/services/json.service';
import { DocModel } from '../../core/models/doc.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() docType: string;
  doc: DocModel;
  dual: boolean;

  constructor(
    private jsonService: JsonService,
    private router: Router
  ) {
    this.doc = null;
    this.docType = '';
  }

  ngOnInit(): void {
    this.getData();
  }

  search(event: KeyboardEvent): void {
    const value = event.target['value'];

    if (!value) {
      this.getData();
      return;
    }

    this.router.navigate([this.docType]);
    this.jsonService.findDoc(value, this.docType).subscribe(resp => {
      this.doc = resp;
    });
  }

  clearSearch(inputSearch: HTMLInputElement) {
    inputSearch.value = '';
    this.getData();
  }

  private getData(): void {
    this.jsonService.getData(this.docType).subscribe(respData => {
      this.jsonService.documentationType().subscribe(respType => {
        this.doc = respData;
        this.dual = respType === 2;
      });
    });
  }

}
