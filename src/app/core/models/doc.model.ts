import { BookMarkModel } from './book-mark.model';
import { RestModel } from './rest.model';

export class DocModel {
  title: string;
  description: string;
  icon: string;
  version: string;
  baseUrl: string;
  urlBaseDev: string;
  bookmarks: Array<BookMarkModel>;
  src: Array<RestModel>;

  constructor(data: DocModel | any) {
    Object.assign(this, data);
  }

}
