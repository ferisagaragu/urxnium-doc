import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  request(type: string, path: string, data?: any): Observable<any> {
    switch (type) {
      case 'get': return this.get(path);
      case 'post': return this.post(path, data);
      case 'put': return this.put(path, data);
      case 'patch': return this.patch(path, data);
      case 'delete': return this.delete(path);
    }
  }

  private get(path: string): Observable<any> {
    console.log(path)
    return this.http.get(
      path,
      {
        observe: 'response',
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${sessionStorage.getItem('token')}`
        )
      }
    );
  }

  private post(path: string, data: any): Observable<any> {
    return this.http.post(
      path,
      data,
      {
        observe: 'response',
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${sessionStorage.getItem('token')}`
        )
      }
    );
  }

  private put(path: string, data: any): Observable<any> {
    return this.http.put(
      path,
      data,
      {
        observe: 'response',
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${sessionStorage.getItem('token')}`
        )
      }
    );
  }

  private patch(path: string, data: any): Observable<any> {
    return this.http.patch(
      path,
      data,
      {
        observe: 'response',
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${sessionStorage.getItem('token')}`
        )
      }
    );
  }

  private delete(path: string): Observable<any> {
    return this.http.delete(
      path,
      {
        observe: 'response',
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${sessionStorage.getItem('token')}`
        )
      }
    );
  }

}
