export class StepModel {

  mapping: string;
  access: string;

  constructor(data: StepModel | any) {
    Object.assign(this, data);
  }

}
