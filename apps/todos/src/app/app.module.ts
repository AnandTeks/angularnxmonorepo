import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FirstComponentComponent } from './first-component/first-component.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: AppComponent, outlet: 'menu' },
      {
        path: 'myapp1',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:8181/remoteEntry.js',
            remoteName: 'myapp1',
            exposedModule: './Module',
          }).then((m) => m.AppModule),
      },
      {
        path: 'myapp2',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:8282/remoteEntry.js',
            remoteName: 'myapp2',
            exposedModule: './Module',
          }).then((m) => m.AppModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
