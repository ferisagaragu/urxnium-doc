import { StepModel } from './step-model';
import { PathVariableModel } from './path-variable.model';
import { CredentialModel } from './credential.model';

export class RestElementModel {

  name: string;
  authorization: boolean;
  baseUrl: string;
  urlBaseDev: string;
  mapping: string;
  access: 'get' | 'post' | 'put' | 'delete' | 'patch';
  bookmark: string;
  description: string;
  credentials: Array<CredentialModel>;
  html: object;
  steps: Array<StepModel>;
  pathVariables: Array<PathVariableModel>;
  requestBody: object;
  permissions: Array<String>;
  responseOk: object;
  responseCreated: object;
  responseNotModified: object;
  responseBadRequest: object;
  responseUnauthorized: object;
  responseForbidden: object;
  responseInternalServerError: object;

  constructor(data: RestElementModel | any) {
    Object.assign(this, data);
  }

}
