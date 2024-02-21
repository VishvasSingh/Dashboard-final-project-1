import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DataInputComponent } from './data-input/data-input.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      {
            path: 'project-dashboard',
            component: LandingPageComponent,
      },
      {
        path: 'data-input',
        component: DataInputComponent
      }
    ],
  },
  { path: 'default-route', redirectTo: 'project-dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'project-dashboard', pathMatch: 'full' }, // Handle invalid routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
