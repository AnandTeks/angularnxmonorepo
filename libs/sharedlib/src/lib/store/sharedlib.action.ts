import { createAction } from '@ngrx/store';

export const userNameInit = createAction(
  '[User Details] Init',
  (name: string) => ({ name })
);
