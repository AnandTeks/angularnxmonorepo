import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './sharedlib.action';
import { User } from './sharedlib.models';

import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const USER_STATE_KEY_FEATURE = 'user';

// export interface UserState extends EntityState<User> {
//   users: User[];
// }

export interface UserState {
  name: string;
}

export const initialState: UserState = {
  name: '',
};

export interface UserPartialState {
  readonly [USER_STATE_KEY_FEATURE]: UserState;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

// export const initialState: UserState = userAdapter.getInitialState({
//   users: [],
// });

export const userReducer = createReducer(
  initialState,
  on(UserActions.userNameInit, (state, action) => ({
    ...state,
    name: action.name,
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
