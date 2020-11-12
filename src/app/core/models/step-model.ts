export class StepModel {

  name: string;
  access: string;

  constructor(data: StepModel | any) {
    Object.assign(this, data);
  }

}
