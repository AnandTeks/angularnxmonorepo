import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromsharedlib from './store/sharedlib.reducer';
import { UserFacade } from './store/sharedlib.facade';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromsharedlib.USER_STATE_KEY_FEATURE,
      fromsharedlib.reducer
    ),
    EffectsModule.forFeature([]),
  ],
  providers: [UserFacade],
})
export class sharedlibModule {}
