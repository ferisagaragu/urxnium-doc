export class ExampleCodeModel {

  code: any;
  out: any;
  language: string;
  title: string;
  description: string;

  constructor(data: ExampleCodeModel | any) {
    Object.assign(this, data);
  }

}
