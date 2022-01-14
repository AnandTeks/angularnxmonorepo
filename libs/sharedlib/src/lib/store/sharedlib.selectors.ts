import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  USER_STATE_KEY_FEATURE,
  UserState,
  userAdapter,
} from './sharedlib.reducer';

export const getUserState = createFeatureSelector<UserState>(
  USER_STATE_KEY_FEATURE
);

//const { selectAll, selectEntities } = userAdapter.getSelectors();

export const getSelectedUsers = createSelector(
  getUserState,
  (state: UserState) => {
    console.log('state invokedddddddddd', state);
    return state.name;
  }
);

// export const getAllGallery = createSelector(getUserState, (state: UserState) =>
//   selectAll(state)
// );

// export const getGalleryEntities = createSelector(
//   getUserState,
//   (state: UserState) => selectEntities(state)
// );
