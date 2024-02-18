import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class ProjectListService {
  constructor(private http: HttpClient) {}

  smoke(): Observable<any> {
    const url = `${API_CONFIG.baseUrl}${API_CONFIG.smoke}`;

    const request = new HttpRequest('GET', url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        mode: 'no-cors',
      }),
    });
    return this.http.request(request);
  }

  getProjectDetails(): Observable<any> {
    const url = `${API_CONFIG.baseUrl}${API_CONFIG.projectDetails}`;

    const request = new HttpRequest('GET', url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        mode: 'no-cors',
      }),
    });
    return this.http.request(request);
  }

  formatProjectDetailsData(data: any[]): any[] {
    if (data)
    {
      const formattedData = data?.map((item) => {
        return {
            'data': {
              'Project Name': item['projectName'],
              'Client Name': item['clientName'],
              'Date': item['date']
            }
        };
      });
      return formattedData;
    }
    return []
  }
}
