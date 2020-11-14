import { Component, Input, OnInit } from '@angular/core';
import { CredentialModel } from '../../../core/models/credential.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../../core/http/authentication.service';

@Component({
  selector: 'app-section-authorization',
  templateUrl: './section-authorization.component.html',
  styleUrls: ['./section-authorization.component.scss']
})
export class SectionAuthorizationComponent implements OnInit {

  form: FormGroup;
  authType: string;
  token: string;

  @Input() credentials: Array<CredentialModel>;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.authType = sessionStorage.getItem('token') ?
      'problem'
    :
      'error';
    this.token = sessionStorage.getItem('token');
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      credential: [
        this.credentials ?
          this.credentials.length > 0 ? this.credentials[0] : ''
        : ''
      ]
    });
  }

  authorize(): void {
    if (this.form.invalid) {
      return;
    }

    const credential = new CredentialModel(this.form.value.credential);

    this.authenticationService.authenticate(credential)
      .subscribe(resp => {
        sessionStorage.setItem('token', resp);
        this.authType = 'success';
        this.token = resp;
      }, () => {
        this.authType = 'error';
        this.token = 'none';
      });
  }

}
