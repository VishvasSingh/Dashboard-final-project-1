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

  ngOnInit(): void {
    this.fetchData();
  }

  createProject() {
    console.log('button');
    this.dialogService.open(CreateProjectModalComponent);
  }

  fetchData() {
    this.store.dispatch(AppActions.showSpinner());
    console.log("show spinner")
    const subscription$ = this.projectListService
        .smoke()
        .subscribe(
          (data) => {
            this.response = data;
            console.log(data)
            if (data?.ok)
            {
                this.store.dispatch(AppActions.hideSpinner());
            }
          },
          (error) => {
            console.error(error);
            this.store.dispatch(AppActions.hideSpinner());
          }
        )
  }
}
