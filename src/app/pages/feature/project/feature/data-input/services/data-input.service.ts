import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/app/config/api.config';
import { HttpService } from 'src/app/http/services/http.service';

@Injectable()
export class DataInputService {
  constructor(private httpService: HttpService, private http: HttpClient) {}

  getDataInputStatus() {
    const url = `${API_CONFIG.baseUrl}${API_CONFIG.dataInput}`;
    return this.httpService.makeHttpRequest('GET', url);
  }

  uploadFile(data: any) {
    const url = `${API_CONFIG.baseUrl}${API_CONFIG.uploadDataInput}`;
    return this.httpService.makeHttpRequest('POST', url, data);
  }

  downloadFile() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/octet-stream',
      Accept: 'application/octet-stream',
    });
    const url = `${API_CONFIG.baseUrl}${API_CONFIG.downloadDataInput}`;
    return this.http.get( url, {
      headers,
      responseType: 'blob',
    });
  }
}
