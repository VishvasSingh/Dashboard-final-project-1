import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ChatbotComponent } from "./chatbot/chatbot.component";


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
        path: 'chat',
        component: ChatbotComponent,
      },
      {
        path: 'project/:projectId',
        loadChildren: () =>
          import('./project/feature/project.module').then(
            (m) => m.ProjectModule
          ),
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
  