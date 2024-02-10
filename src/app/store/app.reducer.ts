// spinner.reducers.ts

import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { initialState, SpinnerState } from './app.state';

export const spinnerReducer = createReducer(
  initialState,
  on(AppActions.showSpinner, (state) => ({ ...state, show: true })),
  on(AppActions.hideSpinner, (state) => ({ ...state, show: false }))
);

export function reducer(state: SpinnerState | undefined, action: Action) {
  return spinnerReducer(state, action);
}
