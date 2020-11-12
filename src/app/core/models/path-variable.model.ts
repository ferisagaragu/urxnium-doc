export class PathVariableModel {

  regex: string;
  value: string;
  type: string;

  constructor(data: PathVariableModel | any) {
    Object.assign(this, data);
  }

}
