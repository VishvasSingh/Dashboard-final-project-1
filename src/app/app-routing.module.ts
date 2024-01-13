import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/feature/auth.module')
    .then(m => m.AuthModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/feature/pages.module')
    .then(m => m.PagesModule)
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
