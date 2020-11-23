export class FunctionalModel {

  name: string;
  elements: Array<any>;

  constructor(data: FunctionalModel | any) {
    Object.assign(this, data)
  }

}
