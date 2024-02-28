import { Injectable } from "@angular/core";
import { API_CONFIG } from "src/app/config/api.config";
import { HttpService } from "src/app/http/services/http.service";

@Injectable()
export class DataInputService {
    constructor(private httpService: HttpService) {
    }

    getDataInputStatus(){
        const url = `${API_CONFIG.baseUrl}${API_CONFIG.dataInput}`;
        return this.httpService.makeHttpRequest('GET', url);
    }
}