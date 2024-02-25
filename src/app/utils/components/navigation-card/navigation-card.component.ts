import { Component, Input } from "@angular/core";
import { NbCardModule, NbIconModule } from "@nebular/theme";

@Component({
    selector: 'app-navigation-card',
    templateUrl: 'navigation-card.component.html',
    styleUrls: ['navigation-card.component.scss'],
    standalone: true,
    imports: [NbCardModule, NbIconModule]
})

export class NavigationCard {
    @Input() icon: string = ''
    @Input() text: string = ''
}