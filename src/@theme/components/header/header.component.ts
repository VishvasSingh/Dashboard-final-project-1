import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbActionsModule, NbIconModule, NbMediaBreakpointsService, NbMenuService, NbSearchModule, NbSidebarService, NbThemeService, NbUserModule } from '@nebular/theme';

import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  standalone: true,
  imports: [NbIconModule, NbUserModule, NbActionsModule, NbSearchModule]
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;


  currentTheme = 'corporate';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
             ) {
  }

  ngOnInit() {}

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
    this.menuService.navigateHome();
    return false;
  }
}
