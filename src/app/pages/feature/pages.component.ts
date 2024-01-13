import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NbMenuModule } from "@nebular/theme";
import { ThemeModule } from "src/@theme/theme.module";
import { MENU_ITEMS } from "./pages.menu";
import { OneColumnLayoutComponent } from "src/@theme/layouts";

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    standalone: true,
    imports: [RouterModule, NbMenuModule, ThemeModule, OneColumnLayoutComponent]
})

export class PagesComponent{
    menu = MENU_ITEMS
}