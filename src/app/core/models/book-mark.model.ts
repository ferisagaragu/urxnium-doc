export class BookMarkModel {
  name: string;
  color: string;
  icon: string;

  constructor(data: BookMarkModel | any) {
    Object.assign(this, data);
  }
}
