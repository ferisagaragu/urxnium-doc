import { AfterViewInit, Component, Inject, Input } from '@angular/core';
import { RestModel } from '../../core/models/rest.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-list-rest',
  templateUrl: './list-rest.component.html',
  styleUrls: ['./list-rest.component.scss']
})
export class ListRestComponent implements AfterViewInit {

  @Input() src: Array<RestModel>;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const elements = document.getElementsByClassName('selected');

      if (elements.length > 0) {
        elements.item(0).scrollIntoView({ block: 'end', behavior: 'smooth' })
      }
    }, 500);
  }

}
