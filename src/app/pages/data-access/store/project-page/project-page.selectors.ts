import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectState } from './project-page.state';

export const selectProjectState =
  createFeatureSelector<ProjectState>('project');

export const selectMenuState = createSelector(
  selectProjectState,
  (state: ProjectState) => state.menuItems
);

export const selectSidebarState = createSelector(
  selectProjectState,
  (state: ProjectState) => state.showSidebar
);