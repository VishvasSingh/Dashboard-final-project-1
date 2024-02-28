import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as AppActions from '../../../store/app.actions';

@Injectable({
    providedIn: 'root'
})

export class SpinnerService {
    constructor(private store: Store){}
    showSpinner(){
        this.store.dispatch(AppActions.showSpinner())
    }

    hideSpinner(){
        this.store.dispatch(AppActions.hideSpinner())
    }

}