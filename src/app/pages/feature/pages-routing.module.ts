import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { DataInputComponent } from "./data-input/data-input.component";


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'project-list',
        component: ProjectListComponent,
      },
      {
        path: 'data-input',
        component: DataInputComponent,
      },
    ],
  },
  { path: 'default-route', redirectTo: 'project-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'project-list', pathMatch: 'full' }, // Handle invalid routes
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
  