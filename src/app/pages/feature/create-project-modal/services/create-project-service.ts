import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class CreateProjectService {

    constructor(private http: HttpClient){}

    createProject(data:any): Observable<any>{
        const url = `${API_CONFIG.baseUrl}${API_CONFIG.createProject}`;
        const request = new HttpRequest('POST', url, {
          body: data
        });
        return this.http.request(request);
    }


}