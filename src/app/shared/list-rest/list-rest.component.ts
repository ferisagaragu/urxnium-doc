import { AfterViewInit, Component, Inject, Input } from '@angular/core';
import { RestModel } from '../../core/models/rest.model';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-rest',
  templateUrl: './list-rest.component.html',
  styleUrls: ['./list-rest.component.scss']
})
export class ListRestComponent implements AfterViewInit {

  @Input() src: Array<RestModel>;
  @Input() docType: string;
  @Input() dual: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const elements = document.getElementsByClassName('selected');

      if (elements.length > 0) {
        elements.item(0).scrollIntoView({ block: 'end', behavior: 'smooth' })
      }
    }, 500);
  }

  goToHome(): void {
    this.router.navigate([`/${this.docType}`]);
  }

  goToDocument(): void {
    this.router.navigate(
      [`/${this.docType === 'rest' ? 'functional' : 'rest'}`]
    );
  }

  limitText(text: string): string {
    if (text) {
      if (text.length > 20) {
        return `${text.substring(0, 20)}...`;
      } else {
        return text;
      }
    } else {
      return '';
    }
  }

}
