import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { NbButtonModule, NbCardModule, NbDialogService, NbIconModule, NbSpinnerModule, NbTreeGridModule } from "@nebular/theme";
import { TreeGridComponent } from "../tree-grid/tree-grid.component";
import { CreateProjectModalComponent } from "../create-project-modal/create-project-modal.component";
import { ProjectListService } from "./services/project-list-service";
import { HttpClientModule } from "@angular/common/http";
import { Store, select } from "@ngrx/store";
import * as AppActions from '../../../store/app.actions';
import { Observable, Subscription, take } from "rxjs";
import * as AppSelectors from '../../../store/app.selectors'


@Component({
  selector: 'app-project-list',
  templateUrl: 'project-list.component.html',
  styleUrls: ['project-list.component.scss'],
  standalone: true,
  imports: [
    TreeGridComponent,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    HttpClientModule,
    NbSpinnerModule
  ],
})
export class ProjectListComponent implements OnInit {
  constructor(
    private dialogService: NbDialogService,
    private projectListService: ProjectListService,
    private store: Store,
    private cdr: ChangeDetectorRef
  ) {}
  response: any;
  projectsData: any[] = []

  ngOnInit(): void {
    this.fetchData();
  }

  createProject() {
    const dialogRef = this.dialogService.open(CreateProjectModalComponent);
  }

  fetchData() {
  this.projectListService.fetchData().subscribe(
    (data) => {
      if (data)
      {
        this.projectsData = data
        this.cdr.detectChanges()
      }
    }
  )
}

}
