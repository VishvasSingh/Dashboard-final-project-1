import { Component } from "@angular/core";
import { NbCardModule } from "@nebular/theme";

@Component({
    selector: 'app-project-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    standalone: true,
    imports: [NbCardModule]
})

export class LandingPageComponent{}