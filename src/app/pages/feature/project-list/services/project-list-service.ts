import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';
import * as AppActions from '../../../../store/app.actions';

@Injectable({
  providedIn: 'root',
})
export class ProjectListService {
  projectsData: any;
  projectData$ = new Subject<any>();
  constructor(private http: HttpClient, private store: Store) {}

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
    const request = new HttpRequest('POST', url, {
      body: data,
    });
    return this.http.request(request);
  }

  deleteProjectHttp(projectId: string): Observable<any> {
    const url = `${API_CONFIG.baseUrl}${API_CONFIG.deleteProject}`;
    const request = new HttpRequest('DELETE', url, {
      headers: new HttpHeaders({
        projectId: projectId,
      }),
    });
    return this.http.request(request);
  }

  fetchData() {
    this.store.dispatch(AppActions.showSpinner());
    const subscription$ = this.getProjectDetails().subscribe(
      (data) => {
        if (data?.ok) {
          this.store.dispatch(AppActions.hideSpinner());
          this.projectsData = this.formatProjectDetailsData(data?.body?.data);
          this.projectData$.next(this.projectsData);
          subscription$.unsubscribe();
        }
      },
      (error) => {
        console.error(error);
        this.store.dispatch(AppActions.hideSpinner());
      }
    );
    return this.projectData$;
  }

  createProject(data: any) {
    const create$ = new Subject<any>();
    this.store.dispatch(AppActions.showSpinner());
    const createHttp$ = this.createProjectHttp(data).subscribe((response) => {
      if (response?.ok) {
        this.store.dispatch(AppActions.hideSpinner());
        createHttp$.unsubscribe();
        create$.next(response);
        this.fetchData()
      }
    },
    (error) => {
      console.log(error)
      this.store.dispatch(AppActions.hideSpinner());
    }
    );
    return create$;
  }

  deleteProject(projectId: string) {
    const delete$ = new Subject<any>();
    this.store.dispatch(AppActions.showSpinner());
    const deleteHttp$ = this.deleteProjectHttp(projectId).subscribe(
      (response) => {
        if (response?.ok) {
          this.store.dispatch(AppActions.hideSpinner());
          deleteHttp$.unsubscribe();
          delete$.next(response);
          this.fetchData();
        }
      },
      (error) => {
        console.error(error);
        this.store.dispatch(AppActions.hideSpinner());
      }
    );
    return delete$;
  }
}
