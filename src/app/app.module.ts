import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule,
  NbThemeService,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { ThemeModule } from 'src/@theme/theme.module';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth/data-access/store/auth.reducer';
import { projectReducer } from './pages/data-access/store/project-page/project-page.reducer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './pages/feature/spinner/spinner.component';
import { spinnerReducer } from './store/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorService } from './http/services/interceptors/http-interceptor.service';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NbCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbDatepickerModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts: ()=> import('echarts')
    }),
    BrowserModule,
    NbSidebarModule,
    NbButtonModule,
    NbToastrModule.forRoot(),
    HttpClientModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    ThemeModule.forRoot(),
    StoreModule.forRoot({ auth: authReducer, project: projectReducer, spinner:spinnerReducer }),
    SpinnerComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class AppModule {}
