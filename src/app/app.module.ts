import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbSidebarService, NbThemeModule, NbThemeService, NbWindowModule } from "@nebular/theme";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [AppComponent],
    imports: [
        NbCardModule,
        NbThemeModule.forRoot(
            {name: 'corporate'},
            
        ),
        NbLayoutModule,
        BrowserModule,
        NbSidebarModule,
        NbButtonModule,
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbDatepickerModule.forRoot(),
        NbDialogModule.forRoot(),
        NbWindowModule.forRoot(),
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {
  }