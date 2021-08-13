import { Injectable } from '@angular/core';
import { RestElementModel } from '../models/rest-element.model';
import { RestModel } from '../models/rest.model';
import { DocModel } from '../models/doc.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FunctionalModel } from '../models/functional.model';
import { FunctionalElementModel } from '../models/functional-element.model';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  getData(type: string): Observable<DocModel> {
    return this.http.get('assets/data/doc.json')
      .pipe(map(resp => this.convertDoc(resp, type)));
  }

  findRestElementByMapping(mapping: string, access: string, type: string): Observable<RestElementModel> {
    return this.http.get('assets/data/doc.json')
      .pipe(map(resp => this.convertRestElement(resp, mapping, access, type)));
  }

  findRestElementByName(mapping: string, type: string): Observable<FunctionalElementModel> {
    return this.http.get('assets/data/doc.json')
      .pipe(map(resp => this.convertFunctionalElement(resp, mapping, type)));
  }

  findDoc(search: string, type: string): Observable<DocModel> {
    return this.http.get('assets/data/doc.json')
      .pipe(map(resp => this.convertFindDoc(resp, search, type)));
  }

  documentationType(): Observable<number> {
    return this.http.get('assets/data/doc.json')
      .pipe(map(resp => this.convertDocumentationType(resp)));
  }

  private convertDoc(resp: any, type: string): DocModel {
    return new DocModel({
      ...resp[type],
      src: resp[type]?.src.map(controller => (
        {
          ...controller,
          elements: controller.elements.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
          }).sort((a, b) => (
            this.convertValuesToOrder(a.access) - this.convertValuesToOrder(b.access)
          )).map(item => ({ ...item, baseUrl: resp[type].baseUrl }))
        }
      ))
    });
  }

  private convertRestElement(resp: any, mapping: string, access: string, type: string): RestElementModel {
    const rest = resp[type].src.map(item => new RestModel(item));
    let findItem = null;

    rest.forEach(item => {
      const findElement = item.elements.find(
        itemChildFind => itemChildFind.mapping === mapping && itemChildFind.access === access
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

  private convertFunctionalElement(resp: any, name: string, type: string): FunctionalElementModel {
    const rest = resp[type].src.map(item => new FunctionalModel(item));
    let findItem = null;

    rest.forEach(item => {
      const findElement = item.elements.find(
        itemChildFind => itemChildFind.name === name
      );

      if (findElement) {
        findItem = findElement;
      }
    });

    return new FunctionalElementModel(
      {
        ...findItem
      }
    );
  }

  private convertFindDoc(resp: any, search: string, type: string): DocModel {
    return new DocModel({
      ...resp[type],
      src: resp[type].src.map(controller => (
        {
          ...controller,
          elements: controller.elements.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
          }).sort((a, b) => (
            this.convertValuesToOrder(a.access) - this.convertValuesToOrder(b.access)
          )).filter(item => `${item.access}${item.name}`.includes(search))
            .map(item => ({ ...item, baseUrl: resp[type].baseUrl }))
        }
      ))
    });
  }

  private convertDocumentationType(resp: any): number {
    if (resp.rest && resp.functional) {
      return 2;
    }

    if (resp.rest) {
      return 1;
    }

    if (resp.functional) {
      return 0;
    }
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
      case 'entity': return 8;
      case 'enum': return 9;
      case 'interface': return 10;
      case 'component': return 11;
      case 'shell': return 12;
      case 'directive': return 13;
      case 'service': return 14;
      case 'guard': return 15;
      case 'pipeline': return 16;
      case 'stylesheet': return 17;
      case 'module': return 18;
      case 'class': return 19;
    }
    return -1;
  }

}
