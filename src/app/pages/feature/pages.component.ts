import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NbMenuItem, NbMenuModule, NbMenuService, NbSpinnerModule } from "@nebular/theme";
import { ThemeModule } from "src/@theme/theme.module";
import { OneColumnLayoutComponent } from "src/@theme/layouts";
import { Store, select } from "@ngrx/store";
import * as authSelectors from 'src/app/auth/data-access/store/auth.selectors'
import * as projectSelectors from 'src/app/pages/data-access/store/project-page/project-page.selectors'
import { LOGIN_MENU_ITEMS, MENU_ITEMS } from "./pages.menu";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SpinnerComponent } from "./spinner/spinner.component";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  standalone: true,
  imports: [RouterModule, NbMenuModule, ThemeModule, OneColumnLayoutComponent, SidebarComponent],
  providers: [NbMenuService]
})
export class PagesComponent implements OnInit {
  menuItems: NbMenuItem[] = [];
  menu: NbMenuItem[] = []

  constructor(private store: Store<{ counter: number }>, private menuService:NbMenuService) {}

  ngOnInit(): void {
    const menu$ = this.store.pipe(select(projectSelectors.selectProjectState)).subscribe(data=>{
      if (data)
      {
        this.menuItems = [...data.menuItems];
      }
      else{
        this.menuItems = MENU_ITEMS
      }
      
  })
  }

  

  // count$ = this.store.select('counter').subscribe((data)=>{console.log(data)})
  // menu$ = this.store.select('project').subscribe((data)=>{console.log(data)})
  // count$ = this.store.pipe(select(authSelectors.selectCounter)).subscribe((data)=>console.log(data))
  // menu$ = this.store.pipe(select(projectSelectors.selectProjectState)).subscribe(data=>{
  //   this.menuItems = [...data.menuItems]
  // })
}
