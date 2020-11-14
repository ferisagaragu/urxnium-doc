import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class FormRequestComponent implements OnInit, OnChanges {

  form: FormGroup;
  response: HttpResponse<any> | HttpErrorResponse;
  load: boolean;

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
  ) {
    this.load = false;
  }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mapping.previousValue !== changes.mapping.currentValue) {
      this.createForm();
      this.response = null;
    }
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
    this.load = true;

    this.requestService.request(
      this.access,
      `${this.baseUrl}${this.convertParams(this.mapping)}`,
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
