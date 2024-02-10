import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NbButton, NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbToggleModule } from "@nebular/theme";
import { select } from "@ngrx/store";

@Component({
    selector: 'app-create-project-modal',
    templateUrl: 'create-project-modal.component.html',
    styleUrls: ['create-project-modal.component.scss'],
    standalone: true,
    imports: [NbCardModule, NbButtonModule, NbInputModule, NbIconModule, NbDatepickerModule, NbToggleModule, CommonModule, FormsModule]
})

export class CreateProjectModalComponent {
inputItemNgModel: any;
textareaItemNgModel: any;
inputItemFormControl: any;
textareaItemFormControl: any;
formData: any = {};

  onSubmit() {
    console.log(this.formData); // Do something with form data
  }
}