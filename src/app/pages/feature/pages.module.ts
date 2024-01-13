import { NgModule } from "@angular/core";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { ThemeModule } from "src/@theme/theme.module";

@NgModule(
    {
        imports: [PagesRoutingModule, PagesComponent, ThemeModule],
        declarations: []
    }
)

export class PagesModule{}