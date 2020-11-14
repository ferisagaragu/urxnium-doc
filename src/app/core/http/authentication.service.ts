import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CredentialModel } from '../models/credential.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(credential: CredentialModel): Observable<any> {
    return this.http.post(credential.endPoint, credential.bodyRequest)
      .pipe(map(resp => {
        const tokenMapping = credential.tokenMapping.split('.');
        let result = resp;

        tokenMapping.forEach(mapping => {
          result = result[mapping];
        });

        return result;
      }));
  }

}
