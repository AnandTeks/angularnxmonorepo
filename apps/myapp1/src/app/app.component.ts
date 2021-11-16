import { Component } from '@angular/core';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp1';
  data = 'Deployment from jenkins pipeline scripts myapp';
}
