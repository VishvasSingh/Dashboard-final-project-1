import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbSidebarService, NbThemeModule, NbThemeService, NbWindowModule } from "@nebular/theme";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { NgxAuthFirebaseUIModule } from "ngx-auth-firebaseui";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environment";
import { provideFirebaseApp } from "@angular/fire/app";
import { initializeApp } from "firebase/app";
import { ThemeModule } from "src/@theme/theme.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        NbCardModule,
        AppRoutingModule,
        RouterModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
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
        provideFirebaseApp(()=> initializeApp(environment.firebaseConfig)),
        ThemeModule.forRoot()
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {
  }