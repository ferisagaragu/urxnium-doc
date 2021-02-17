import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PathVariableModel } from '../../../core/models/path-variable.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialModel } from '../../../core/models/credential.model';
import { RequestService } from '../../../core/http/request.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-form-request',
  templateUrl: './form-request.component.html',
  styleUrls: ['./form-request.component.scss']
})
export class FormRequestComponent implements OnInit, OnChanges {

  form: FormGroup;
  response: HttpResponse<any> | HttpErrorResponse;
  responseUrl: string;
  load: boolean;

  @Input() access: string;
  @Input() file: boolean;
  @Input() baseUrl: string;
  @Input() mapping: string;
  @Input() pathVariables: Array<PathVariableModel>;
  @Input() pathParams: Array<PathVariableModel>;
  @Input() requestBody: object;
  @Input() authorization: boolean;
  @Input() credentials: Array<CredentialModel>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private requestService: RequestService
  ) {
    this.load = false;
  }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (
        changes.mapping &&
        changes.mapping.previousValue !== changes.mapping.currentValue
      ) || (
        changes.access &&
        changes.access.previousValue !== changes.access.currentValue
      )
    ) {
      this.createForm();
      this.response = null;
      this.responseUrl = null;
    }
  }

  convertParamsVariables(mapping: string) {
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
                .replace('/', '%2F')
                .replace("#", "%23")
            )
          );
        } else {
          mapping = mapping.replace(
            param,
            encodeURI(this.form.get(paramName).value)
              .replace('/', '%2F')
              .replace("#", "%23")
          );
        }
      }
    });

    return mapping;
  }

  convertPathParams() {
    let out = '';

    if (this.pathParams) {
      this.pathParams.forEach((param: PathVariableModel, index: number) => {
        if (index === 0) {
          out += `?${param.name}=${
            encodeURI(this.form.get(param.name).value)
            .replace('/', '%2F')
            .replace('#', '%23')
          }`;
        } else {
          out += `&${param.name}=${
            encodeURI(this.form.get(param.name).value)
            .replace('/', '%2F')
            .replace('#', '%23')
          }`;
        }
      });
    }

    return out;
  }

  send(url: HTMLElement): void {
    if (this.form.invalid) {
      return;
    }
    this.load = true;

    this.requestService.request(
      `${this.access}${this.file ? '-file' : ''}`,
      url.textContent,
      this.form.value.requestBody
    ).subscribe(resp => {
      this.response = resp;
      this.load = false;
    }, error => {
      this.response = error;
      this.load = false;
    });
  }

  private createForm(): void {
    const dynamicForm: any = this.requestBody ? {
      requestBody: [this.requestBody]
    } : { };

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

    if (this.pathParams) {
      this.pathParams.forEach(field => {

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
