import { createReducer, on, Action } from "@ngrx/store";
import * as authActions from './auth.actions'

export const initialState = {
    counter: 0,
};

export const authReducer = createReducer(
    initialState,
    on(authActions.login, (state) => {
        return {...state, counter:state.counter+1};
    })
);
