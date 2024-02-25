import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NbCardModule, NbIconModule } from "@nebular/theme";
import { NavigationCard } from "src/app/utils/components/navigation-card/navigation-card.component";

@Component({
  selector: 'app-project-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [NbCardModule, NbIconModule, NavigationCard],
})
export class LandingPageComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  openDataInput() {
    this.router.navigate(['../data-input'], { relativeTo: this.route });
  }
}