import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserFacade } from '@myorg/sharedlib';
import { Store } from '@ngrx/store';
import * as SharedActions from '@myorg/sharedlib';
import { Observable } from 'rxjs';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbNavConfig],
})
export class AppComponent {
  title = 'shell';
  collapse = true;
  pathName = '';
  users$: Observable<any> | undefined;

  navigate(path: string) {
    console.log(path);
    this.router.navigate([path]);
  }

  constructor(
    private router: Router,
    private userFacade: UserFacade,
    private store: Store
  ) {
    this.store.dispatch(SharedActions.userNameInit('Test'));
    this.users$ = this.userFacade.getSelectedUser();
  }
}
