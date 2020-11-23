export class AttributeModel {

  name: string;
  type: any;
  description: string;
  default: any;

  constructor(data: AttributeModel | any) {
    Object.assign(this, data);
  }

}
