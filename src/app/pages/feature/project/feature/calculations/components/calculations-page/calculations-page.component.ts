import { Component } from "@angular/core";
import { NbCardModule } from "@nebular/theme";
import { GradeGaugeComponent } from "../grade-gauge/grade-gauge.component";

@Component({
    selector: 'app-calculations-page',
    templateUrl: 'calculations-page.component.html',
    styleUrls: ['calculations-page.component.scss'],
    standalone: true,
    imports: [NbCardModule, GradeGaugeComponent]
})

export class CalculationsPage {

}