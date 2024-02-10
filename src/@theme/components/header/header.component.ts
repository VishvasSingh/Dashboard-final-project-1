import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbActionsModule, NbIconModule, NbMediaBreakpointsService, NbMenuService, NbSearchModule, NbSidebarService, NbThemeService, NbUserModule } from '@nebular/theme';
import { Store } from '@ngrx/store';
import * as projectSelectors from 'src/app/pages/data-access/store/project-page/project-page.selectors'
import * as projectActions from 'src/app/pages/data-access/store/project-page/project-page.actions';

import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  standalone: true,
  imports: [NbIconModule, NbUserModule, NbActionsModule, NbSearchModule, CommonModule]
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  showSidebar = false;

  currentTheme = 'corporate';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private store: Store,
              private router: Router
             ) {
  }

  ngOnInit() {
    const showSidebar$ = this.store.select(projectSelectors.selectSidebarState).subscribe((data)=> {
      this.showSidebar = data
    })
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
    this.router.navigate(['/pages/project-list'])
    this.store.dispatch(projectActions.projectClosed())
    return false;
  }
}
