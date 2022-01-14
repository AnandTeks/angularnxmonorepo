import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FirstComponentComponent } from './first-component/first-component.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { sharedlibModule } from '@myorg/sharedlib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    sharedlibModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // Restrict extension to log-only mode
    }),
    AlertModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: AppComponent, outlet: 'menu' },
      {
        path: 'myapp1',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            remoteName: 'myapp1',
            exposedModule: './Module',
          }).then((m) => m.AppModule),
      },
      {
        path: 'myapp2',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
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
