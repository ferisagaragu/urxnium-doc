import { BookMarkModel } from './book-mark.model';
import { RestModel } from './rest.model';
import { FunctionalModel } from './functional.model';

export class DocModel {
  title: string;
  description: string;
  icon: string;
  version: string;
  bookmarks: Array<BookMarkModel>;
  src: Array<RestModel | FunctionalModel>;

  constructor(data: DocModel | any) {
    Object.assign(this, data);
  }

}
