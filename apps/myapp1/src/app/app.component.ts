import { Component } from '@angular/core';
import { UserFacade } from '@myorg/sharedlib';
import { Observable } from 'rxjs';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp1';
  data = 'Deployment from jenkins pipeline scripts myapp';
  users$: Observable<any> | undefined;
  constructor(private userFacde: UserFacade) {
    this.userFacde.updateUserName('APP One');
    this.users$ = this.userFacde.selectUsers$;
  }
}
