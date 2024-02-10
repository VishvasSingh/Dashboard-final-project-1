// spinner.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpinnerState } from './app.state';

// Get the feature selector for the spinner state
export const selectSpinnerState =
  createFeatureSelector<SpinnerState>('spinner');

// Create a selector to get the show property from the spinner state
export const selectSpinnerShow = createSelector(
  selectSpinnerState,
  (state: SpinnerState) => state.show
);
