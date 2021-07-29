import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private http: HttpClient) { }

  findAllDocs(): Observable<any> {
    return this.http.get(
      `https://urxnium-doc-default-rtdb.firebaseio.com/${
        localStorage.getItem('uuid')
      }.json`
    ).pipe(map(resp => {
      const data = [];

      for (let respKey in resp) {
        const functionalName = resp[respKey]?.functional?.title;
        const restName = resp[respKey]?.rest?.title;

        data.push({
          uuid: respKey,
          functionalName,
          restName,
          ...resp[respKey]
        });
      }

      return data;
    }));
  }

  uploadDoc(data): Observable<any> {
    return this.http.post(
      `https://urxnium-doc-default-rtdb.firebaseio.com/${
        localStorage.getItem('uuid')
      }.json`,
      data
    );
  }

}
