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

  findRestElementByMapping(mapping: string): Observable<RestElementModel> {
    return this.http.get('assets/data/doc.json')
      .pipe(map(resp => this.convertRestElement(resp, mapping)));
  }

  private convertDoc(resp: any, type: string): DocModel {
    //Aquí se ordenaran
    console.log(resp)
    return new DocModel({
      ...resp[type]
    });
  }

  private convertRestElement(resp: any, mapping: string): RestElementModel {
    const rest = resp.rest.map(item => new RestModel(item));

    return new RestElementModel(
      rest.map(
        itemFind => itemFind.elements.find(
          itemChildFind => itemChildFind.mapping === mapping
        )
      )[0]
    );
  }

}
