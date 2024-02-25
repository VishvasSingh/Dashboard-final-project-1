import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbActionsModule, NbIconModule, NbMediaBreakpointsService, NbMenuService, NbSearchModule, NbSidebarService, NbThemeService, NbUserModule } from '@nebular/theme';
import { Store } from '@ngrx/store';
import * as projectSelectors from 'src/app/pages/data-access/store/project-page/project-page.selectors'
import * as projectActions from 'src/app/pages/data-access/store/project-page/project-page.actions';

import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/utils/services/navigation-service/navigation.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    NbIconModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    CommonModule,
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  showSidebar = false;
  showMainPage$!: Observable<boolean>;
  projectName: string = '';
  showMainPage: boolean = true;

  currentTheme = 'corporate';

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private store: Store,
    private router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    const showSidebar$ = this.store
      .select(projectSelectors.selectSidebarState)
      .subscribe((data) => {
        this.showSidebar = data;
      });
    this.navigationService.getProjectName().subscribe((projectName) => {
      this.projectName = projectName;
    });
    this.navigationService.getMainPage().subscribe((showMainPage) => {
      this.showMainPage = showMainPage;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    // this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.navigationService.setProjectName('');
    this.router.navigate(['/pages/project-list']);
    this.store.dispatch(projectActions.projectClosed());
    return false;
  }

  openProjectDashboard(){
    this.navigationService.openProjectDashboard()
  }
  
}
