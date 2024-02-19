import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  NbButton,
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogRef,
  NbIconModule,
  NbInputModule,
  NbToggleModule,
} from '@nebular/theme';
import { select } from '@ngrx/store';
import { ProjectListService } from '../project-list/services/project-list-service';

@Component({
  selector: 'app-create-project-modal',
  templateUrl: 'create-project-modal.component.html',
  styleUrls: ['create-project-modal.component.scss'],
  standalone: true,
  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    NbDatepickerModule,
    NbToggleModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CreateProjectModalComponent {
  inputItemNgModel: any;
  textareaItemNgModel: any;
  inputItemFormControl: any;
  textareaItemFormControl: any;
  formData: any = {};
  projectForm: FormGroup;
  isValid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: NbDialogRef<CreateProjectModalComponent>,
    private projectListService: ProjectListService
  ) {
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      clientName: ['', Validators.required],
      date: ['', Validators.required],
    });

    this.projectForm.valueChanges.subscribe(() => {
      this.isValid = this.projectForm.valid; // Update flag based on form validity
    });
  }

  onSubmit() {
    this.dialogRef.close();
    this.projectListService
      .createProject(this.projectForm.value)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
