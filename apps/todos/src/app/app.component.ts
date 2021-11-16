import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'windowed-observable';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbNavConfig],
})
export class AppComponent {
  title = 'shell';
  collapse: boolean = true;
  pathName = '';

  navigate(path: string) {
    console.log(path);
    this.router.navigate([path]);
  }

  constructor(private router: Router) {}
}
