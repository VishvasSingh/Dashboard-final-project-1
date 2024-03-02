import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbToastrService,
} from '@nebular/theme';
import { HttpService } from 'src/app/http/services/http.service';
import { DataInputService } from './services/data-input.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-data-input',
  templateUrl: 'data-input.component.html',
  styleUrls: ['data-input.component.scss'],
  standalone: true,
  imports: [
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    CommonModule,
  ],
  providers: [NbToastrService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataInputComponent implements OnInit {
  selectedFile: File | null = null;
  fileName = new BehaviorSubject<string>('');
  constructor(
    private http: HttpService,
    private dataInputService: DataInputService,
    private toastService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.getDataInputStatus();
  }

  getDataInputStatus() {
    this.dataInputService.getDataInputStatus().subscribe((response) => {
      const fileName = response.body.fileName;
      this.fileName.next(fileName);
    });
  }

  onFileSelected(event: any) {
    console.log(event);
    this.selectedFile = event.target.files[0] as File;
  }

  uploadFile() {
    if (!this.selectedFile) {
      console.error('No Files selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.dataInputService.uploadFile(formData).subscribe((response) => {
      if (response.ok) {
        this.getDataInputStatus();
        this.selectedFile = null
        this.toastService.success('Success', 'File Uploaded Successfully');
      }
    });
  }

  downloadFile(){
    this.dataInputService.downloadFile().subscribe(
        (response:Blob)=> {
        const blob = new Blob([response], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        }); // Adjust MIME type if necessary

        // Create a temporary link element and trigger the download
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'filename.xlsx'; // Provide a default filename
        document.body.appendChild(link);
        link.click();

        // Cleanup
        window.URL.revokeObjectURL(link.href);
        document.body.removeChild(link);
      },
      error => {
        console.error('Error downloading file:', error);
      }
    )
  }
}
