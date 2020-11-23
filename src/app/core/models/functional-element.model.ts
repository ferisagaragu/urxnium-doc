import { ExampleCodeModel } from './example-code.model';
import { AttributeModel } from './attribute.model';

export class FunctionalElementModel {

  name: string;
  access: 'public' | 'private' | 'protected' |
    'entity' | 'enum' | 'interface' | ' component';
  bookmark: string;
  description: string;
  html: any;
  exampleCodes: Array<ExampleCodeModel>;
  attributes: Array<AttributeModel>;

  constructor(data: FunctionalElementModel | any) {
    Object.assign(this, data);
  }

}
