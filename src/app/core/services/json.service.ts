import { Injectable } from '@angular/core';
import { RestElementModel } from '../models/rest-element.model';
import { RestModel } from '../models/rest.model';
import { DocModel } from '../models/doc.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  getData(type: string): Observable<DocModel> {
    return this.http.get('assets/data/doc.json')
      .pipe(map(resp => this.convertDoc(resp, type)));
  }

  findRestElementByMapping(mapping: string, type: string): Observable<RestElementModel> {
    return this.http.get('assets/data/doc.json')
      .pipe(map(resp => this.convertRestElement(resp, mapping, type)));
  }

  findDoc(search: string, type: string) {
    return this.http.get('assets/data/doc.json')
      .pipe(map(resp => this.convertFindDoc(resp, search, type)));
  }

  private convertDoc(resp: any, type: string): DocModel {
    return new DocModel({
      ...resp[type],
      src: resp[type].src.map(controller => (
        {
          ...controller,
          elements: controller.elements.sort((a, b) => (
            this.convertValuesToOrder(a.access) - this.convertValuesToOrder(b.access)
          )).map(item => ({ ...item, baseUrl: resp[type].baseUrl }))
        }
      ))
    });
  }

  private convertRestElement(resp: any, mapping: string, type: string): RestElementModel {
    const rest = resp[type].src.map(item => new RestModel(item));
    let findItem = null;

    rest.forEach(item => {
      const findElement = item.elements.find(
        itemChildFind => itemChildFind.mapping === mapping
      );

      if (findElement) {
        findItem = findElement;
      }
    });

    return new RestElementModel(
      {
        ...findItem,
        baseUrl: resp[type].baseUrl,
        credentials: resp[type].credentials
      }
    );
  }

  private convertFindDoc(resp: any, search: string, type: string): DocModel {
    return new DocModel({
      ...resp[type],
      src: resp[type].src.map(controller => (
        {
          ...controller,
          elements: controller.elements.sort((a, b) => (
            this.convertValuesToOrder(a.access) - this.convertValuesToOrder(b.access)
          )).filter(item => `${item.access}${item.name}`.includes(search))
            .map(item => ({ ...item, baseUrl: resp[type].baseUrl }))
        }
      ))
    });
  }

  private convertValuesToOrder(value: string): number {
    switch (value) {
      case 'get': return 0;
      case 'post': return 1;
      case 'put': return 2;
      case 'patch': return 3;
      case 'delete': return 4;
      case 'public': return 5;
      case 'private': return 6;
      case 'protected': return 7;
    }
    return -1;
  }

}
