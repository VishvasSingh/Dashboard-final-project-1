import { Component } from "@angular/core";
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from "@nebular/theme";
import { HttpService } from "src/app/http/services/http.service";

@Component({
    selector: 'app-data-input',
    templateUrl: 'data-input.component.html',
    styleUrls: ['data-input.component.scss'],
    standalone: true,
    imports: [NbCardModule, NbInputModule, NbButtonModule, NbIconModule]
})

export class DataInputComponent {
    selectedFile: File | null = null;
    constructor(private http: HttpService){}

    onFileSelected(event: any) {
        this.selectedFile = event.target.files[0] as File;
    }

    uploadFile(){
        if (!this.selectedFile) {
            console.error('No Files selected');
            return ;
        }

        const formData = new FormData();
        formData.append('file', this.selectedFile);

        console.log(formData)
    }
}