import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonService } from './core/services/json.service';
import { AuthService } from './core/http/auth.service';

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
    private activateRoute: ActivatedRoute,
    private jsonService: JsonService
  ) { }

  ngOnInit(): void {
    this.jsonService.documentationType().subscribe(resp => {
      this.activateRoute.fragment.subscribe(url => {
        if (resp === 1 && location.href.includes('functional')) {
          this.router.navigate(['/rest']);
        }

        if (resp === 0 && location.href.includes('rest')) {
          this.router.navigate(['/functional']);
        }
      });
    });
  }

}
