import {
  HttpClient,
  HttpErrorResponse,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  makeHttpRequest(
    method: string,
    url: string,
    data?: any,
    options?: any
  ): Observable<any> {
    let httpRequest: Observable<any>;
    switch (method.toLowerCase()) {
      case 'get':
        httpRequest = this.http.get(url, { ...options, observe: 'response' });
        break;
      case 'post':
        httpRequest = this.http.post(url, data, {
          ...options,
          observe: 'response',
        });
        break;
      case 'delete':
        httpRequest = this.http.delete(url, {
          ...options,
          observe: 'response',
        });
        break;
      case 'patch':
        httpRequest = this.http.patch(url, data, options);
        break;
      case 'put':
        httpRequest = this.http.put(url, data, options);
        break;

      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return httpRequest;
  }
}
