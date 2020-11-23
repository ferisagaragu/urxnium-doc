import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { JsonService } from './core/services/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'urxnium-doc';
  version = environment.version;

  constructor(
    private router: Router,
    private jsonService: JsonService
  ) { }

  ngOnInit(): void {
    this.jsonService.documentationType().subscribe(resp => {
      if (resp === 1) {
        this.router.navigate(['/rest']);
      }

      if (resp === 0) {
        this.router.navigate(['/functional']);
      }
    });
  }

}
