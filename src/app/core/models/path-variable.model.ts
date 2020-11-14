export class PathVariableModel {

  name: string;
  description: string;
  value: string;
  type: string;
  dateFormat: string;
  required: boolean;

  constructor(data: PathVariableModel | any) {
    Object.assign(this, data);
  }

}
