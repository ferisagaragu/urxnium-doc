import { Component, Input, OnInit } from '@angular/core';
import { PathVariableModel } from '../../../core/models/path-variable.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { CredentialModel } from '../../../core/models/credential.model';
import { RequestService } from '../../../core/http/request.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-request',
  templateUrl: './form-request.component.html',
  styleUrls: ['./form-request.component.scss']
})
export class FormRequestComponent implements OnInit {

  form: FormGroup;
  response: HttpResponse<any> | HttpErrorResponse;

  @Input() access: string;
  @Input() baseUrl: string;
  @Input() mapping: string;
  @Input() pathVariables: Array<PathVariableModel>;
  @Input() requestBody: object;
  @Input() authorization: boolean;
  @Input() credentials: Array<CredentialModel>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  convertParams(mapping: string) {
    this.getUrlParams(this.mapping).forEach(param =>  {
      const paramName = param.replace('{', '').replace('}', '');

      if (this.form.contains(paramName)) {
        const inputFormat = this.pathVariables.find(
          item =>
            item.type === 'date' &&
            item.dateFormat &&
            item.name === paramName
        );

        if (inputFormat) {
          mapping = mapping.replace(
            param,
            encodeURI(
              moment(
                this.form.get(paramName).value
              ).format(inputFormat.dateFormat)
            ).replace('/', '%2F')
          );
        } else {
          mapping = mapping.replace(
            param,
            encodeURI(this.form.get(paramName).value)
          ).replace('/', '%2F');
        }
      }
    });

    return mapping;
  }

  send(): void {
    if (this.form.invalid) {
      return;
    }

    this.requestService.request(
      this.access,
      `${this.baseUrl}${this.convertParams(this.mapping)}`
    ).subscribe(resp => {
      console.log(resp)
      this.response = resp;
    }, error => {
      this.response = error;
      console.log(error);
    });
  }

  private createForm(): void {
    const dynamicForm: any = {};

    if (this.pathVariables) {
      this.pathVariables.forEach(field => {

        if (field.required) {
          dynamicForm[field.name] = [
            field.type === 'date' && field.dateFormat ?
              moment(field.value, field.dateFormat).toDate() : field.value,
            Validators.compose([Validators.required])
          ];
        } else {
          dynamicForm[field.name] = [
            field.type === 'date' && field.dateFormat ?
              moment(field.value, field.dateFormat).toDate() : field.value
          ];
        }

      });
    }

    this.form = this.formBuilder.group(dynamicForm);
  }

  private getUrlParams(mapping: string): Array<string> {
    const paramsSearched = [];

    if (!mapping) {
      this.router.navigate(['rest']);
    } else {
      const splitParams = mapping.split('/');

      splitParams.forEach(param => {
        if (param.includes('{') && param.includes('}')) {
          paramsSearched.push(param);
        }
      });
    }

    return paramsSearched;
  }

}
