import { Component } from "@angular/core";
import { NbTreeGridModule } from "@nebular/theme";
import { TreeGridComponent } from "../tree-grid/tree-grid.component";



@Component(
    {
        selector: 'app-project-list',
        templateUrl: 'project-list.component.html',
        styleUrls: ['project-list.component.scss'],
        standalone: true,
        imports: [TreeGridComponent]
    }
)

export class ProjectListComponent {

}