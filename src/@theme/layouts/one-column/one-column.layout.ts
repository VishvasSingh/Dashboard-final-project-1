import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
} from '@nebular/theme';
import { Store } from '@ngrx/store';
import { FooterComponent, HeaderComponent } from 'src/@theme/components';
import * as projectSelectors from 'src/app/pages/data-access/store/project-page/project-page.selectors';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  standalone: true,
  imports: [NbLayoutModule, HeaderComponent, NbSidebarModule, FooterComponent, CommonModule],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed class="header">
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar *ngIf='showSidebar' class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="app-sidebar"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent implements AfterViewInit, OnInit{
  showSidebar = false
  constructor(
    private sidebarService: NbSidebarService,
    private cdr: ChangeDetectorRef,
    private store: Store
  ) {}

  ngOnInit(): void {
    const showSidebar$ = this.store.select(projectSelectors.selectSidebarState).subscribe((data)=>{
      this.showSidebar = data
      this.sidebarService.compact('menu-sidebar');
    })
  }

  ngAfterViewInit(): void {
    this.sidebarService.compact('menu-sidebar');
    this.cdr.detectChanges()
  }
}
