import { RestElementModel } from './rest-element.model';

export class RestModel {

  name: string;
  elements: Array<RestElementModel>;

  constructor(data: RestModel | any) {
    Object.assign(this, data);
  }

}
