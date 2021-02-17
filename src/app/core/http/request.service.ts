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
      case 'get-file': return this.getFile(path);
      case 'post': return this.post(path, data);
      case 'post-file': return this.postFile(path, data);
      case 'put': return this.put(path, data);
      case 'put-file': return this.putFile(path, data);
      case 'patch': return this.patch(path, data);
      case 'patch-file': return this.patchFile(path, data);
      case 'delete': return this.delete(path);
      case 'delete-file': return this.deleteFile(path);
    }
  }

  private get(path: string): Observable<any> {
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

  private getFile(path: string): Observable<any> {
    return this.http.get(
      path,
      {
        observe: 'response',
        responseType: 'blob',
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

  private postFile(path: string, data: any): Observable<any> {
    return this.http.post(
      path,
      data,
      {
        observe: 'response',
        responseType: 'blob',
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

  private putFile(path: string, data: any): Observable<any> {
    return this.http.put(
      path,
      data,
      {
        observe: 'response',
        responseType: 'blob',
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

  private patchFile(path: string, data: any): Observable<any> {
    return this.http.patch(
      path,
      data,
      {
        observe: 'response',
        responseType: 'blob',
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

  private deleteFile(path: string): Observable<any> {
    return this.http.delete(
      path,
      {
        observe: 'response',
        responseType: 'blob',
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${sessionStorage.getItem('token')}`
        )
      }
    );
  }

}
