import { Component, OnInit } from '@angular/core';
import { DocService } from '../../core/http/doc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-documentation',
  templateUrl: './list-documentation.component.html',
  styleUrls: ['./list-documentation.component.scss']
})
export class ListDocumentationComponent implements OnInit {

  docs: any;

  constructor(
    private docService: DocService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findAllDocs();
  }

  addDocumentation(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json'
    input.click();

    input.addEventListener('change', () => {
      const fr = new FileReader();

      fr.onload = () => {
        const doc = JSON.parse(fr.result.toString());

        if (doc.functional || doc.rest) {
          this.docService.uploadDoc(doc).subscribe(resp => {
            this.findAllDocs();
          });
        }
      }

      fr.readAsText(input.files[0]);
    });
  }

  showDoc(uuid: string) {
    localStorage.setItem('docUuid', uuid);
    this.router.navigate(['/']);
  }

  private findAllDocs() {
    this.docService.findAllDocs().subscribe(resp => {
      this.docs = resp;
    });
  }

}
