import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as SharedActions from './sharedlib.action';
import * as SharedSelectors from './sharedlib.selectors';

@Injectable()
export class UserFacade {
  selectUsers$ = this.store.pipe(select(SharedSelectors.getSelectedUsers));

  constructor(private readonly store: Store) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getSelectedUser(): any {
    return this.selectUsers$;
  }

  updateUserName(name: string) {
    this.store.dispatch(SharedActions.userNameInit(name));
  }
}
