import { Component } from "@angular/core";
import { NbCardModule } from "@nebular/theme";

@Component({
    selector: 'app-data-input',
    templateUrl: 'data-input.component.html',
    styleUrls: ['data-input.component.scss'],
    standalone: true,
    imports: [NbCardModule, ]
})

export class DataInputComponent {

}