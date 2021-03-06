import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CredentialModel } from '../../../core/models/credential.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../../core/http/authentication.service';

@Component({
  selector: 'app-section-authorization',
  templateUrl: './section-authorization.component.html',
  styleUrls: ['./section-authorization.component.scss']
})
export class SectionAuthorizationComponent implements OnInit, OnChanges {

  form: FormGroup;
  authType: string;
  token: string;
  load: boolean;

  @Input() credentials: Array<CredentialModel>;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.load = false;
  }

  ngOnInit(): void {
    this.createForm();
    this.authType = sessionStorage.getItem('token') ?
      'problem'
    :
      'error';
    this.token = sessionStorage.getItem('token');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.form) {
      this.form.reset({
        credential: this.getCredential()
      });
    }
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      credential: [ this.getCredential() ]
    });
  }

  authorize(): void {
    if (this.form.invalid) {
      return;
    }
    const credentialData = this.form.value.credential;
    this.load = true;

    if (this.credentials) {
      const credential = new CredentialModel(credentialData);

      this.authenticationService.authenticate(credential)
        .subscribe(resp => {
          sessionStorage.setItem('token', resp);
          this.authType = 'success';
          this.token = resp;
          this.load = false;
        }, () => {
          this.authType = 'error';
          this.token = 'none';
          this.load = false;
        });
    } else {
      sessionStorage.setItem('token', credentialData);
      this.authType = 'success';
      this.token = credentialData;
      this.load = false;
    }
  }

  private getCredential() {
    return this.credentials ?
      this.credentials.length > 0 ? this.credentials[0] : ''
    : '';
  }

}
