import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers} from './reducers';
import {
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatDialogModule
} from '@angular/material';

import {AdminPanelModule} from './components/admin-panel/admin-panel.module';
import {AuthorizationModule} from './components/authorization/authorization.module';
import {UserDashboardModule} from './components/user-dashboard/user-dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminPanelModule,
    AuthorizationModule,
    UserDashboardModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
