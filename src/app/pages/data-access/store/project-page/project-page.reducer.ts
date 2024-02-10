import { NbMenuItem } from "@nebular/theme"
import { createReducer, on } from "@ngrx/store"
import * as projectActions from 'src/app/pages/data-access/store/project-page/project-page.actions'
import { LOGIN_MENU_ITEMS, MENU_ITEMS, PROJECT_MENU_ITEMS } from "src/app/pages/feature/pages.menu"

export const initialProjectState: {showSidebar:boolean, menuItems: NbMenuItem[]} = {
    showSidebar: false,
    menuItems: PROJECT_MENU_ITEMS
}

export const projectReducer = createReducer(
    initialProjectState,
    on(projectActions.projectOpened, (state) => {
        console.log('project reducer -> ', state)
        return {...state, menuItems: PROJECT_MENU_ITEMS, showSidebar:true}
    }),
    on(projectActions.projectClosed, (state)=>{
        return {...state, showSidebar:false}
    })
)