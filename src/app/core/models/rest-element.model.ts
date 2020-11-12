import { StepModel } from './step-model';
import { PathVariableModel } from './path-variable.model';

export class RestElementModel {

  name: string;
  authorization: boolean;
  mapping: string;
  access: 'get' | 'post' | 'put' | 'delete' | 'patch';
  bookmark: string;
  description: string;
  html: object;
  steps: Array<StepModel>;
  responseOk: object;
  responseBadRequest: object;
  responseInternalServerError: object;
  pathVariables: Array<PathVariableModel>;
  requestBody: object;

  constructor(data: RestElementModel | any) {
    Object.assign(this, data);
  }

}
