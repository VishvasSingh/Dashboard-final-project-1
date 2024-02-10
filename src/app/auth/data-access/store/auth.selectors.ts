// app.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/auth/data-access/store/auth.state'; // Import your state interface

const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectCounter = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.counter
  }
);
