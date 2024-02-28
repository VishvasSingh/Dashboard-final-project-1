import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';
import { HttpService } from 'src/app/http/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectListService {
  projectsData: any;
  projectData$ = new Subject<any>();
  constructor(private httpService: HttpService) {}

  smoke(): Observable<any> {
    const url = `${API_CONFIG.baseUrl}${API_CONFIG.smoke}`;
    return this.httpService.makeHttpRequest('GET',url)
  }

  getProjectDetails(): Observable<any> {
    const url = `${API_CONFIG.baseUrl}${API_CONFIG.projectDetails}`;
    return this.httpService.makeHttpRequest('GET', url);
  }

  formatProjectDetailsData(data: any[]): any[] {
    if (data) {
      const formattedData = data?.map((item) => {
        return {
          data: {
            'Project Name': item['projectName'],
            'Client Name': item['clientName'],
            Date: item['date'],
            'Project Id': item['projectId'],
          },
        };
      });
      return formattedData;
    }
    return [];
  }

  createProjectHttp(data: any): Observable<any> {
    const url = `${API_CONFIG.baseUrl}${API_CONFIG.createProject}`;
    const requestBody = {'body': data}
    return this.httpService.makeHttpRequest('POST', url, data);
  }

  deleteProjectHttp(projectId: string): Observable<any> {
    const url = `${API_CONFIG.baseUrl}${API_CONFIG.deleteProject}`;
    const options ={'headers': new HttpHeaders({
        projectId: projectId,
      })}
    return this.httpService.makeHttpRequest('DELETE', url, undefined, options);
  }

  fetchData() {
    const subscription$ = this.getProjectDetails().subscribe(
      (response) => {
        if (response && response.status === 200) {
          const data = response.body;
          if (data) {
            this.projectsData = this.formatProjectDetailsData(data.data);
            this.projectData$.next(this.projectsData);
          } else {
            console.error('Response body is missing or empty');
          }
        } else {
          console.error('Unexpected response status:', response.status);
        }
        subscription$.unsubscribe();
      },
      (error) => {
        console.error(error);
      }
    );
    return this.projectData$;
  }

  createProject(data: any) {
    const create$ = new Subject<any>();
    const createHttp$ = this.createProjectHttp(data).subscribe((response) => {
      if (response?.ok) {
        createHttp$.unsubscribe();
        create$.next(response);
        create$.complete()
        this.fetchData()
      }
    },
    (error) => {
      console.log(error)
    }
    );
    return create$;
  }

  deleteProject(projectId: string) {
    const delete$ = new Subject<any>();
    const deleteHttp$ = this.deleteProjectHttp(projectId).subscribe(
      (response) => {
        if (response?.ok) {
          deleteHttp$.unsubscribe();
          delete$.next(response);
          this.fetchData();
        }
      },
      (error) => {
        console.error(error);
      }
    );
    return delete$;
  }
}
