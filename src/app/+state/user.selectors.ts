import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

// Lookup the 'customer' feature state managed by NgRx
const getUserState = createFeatureSelector<UserState>(
  'customer'
);
export const getAllUsers = createSelector(
  getUserState,
  (state: UserState) => state.userData
);

export const userQuery = {
  getAllUsers
};
