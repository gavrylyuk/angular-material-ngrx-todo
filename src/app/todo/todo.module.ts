import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { EditWindowComponent } from './components/admin-panel/edit-window/edit-window.component';

import { MainPageComponent } from './components/main-page/main-page.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { DescriptionWindowComponent } from './components/user-dashboard/description-window/description-window.component';


import { AuthGuardService } from 'src/app/todo/guards/auth-guard.service';
import { RoleGuardService } from 'src/app/todo/guards/role-guard.service';

import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  declarations: [
    AuthorizationComponent,
    MainPageComponent,
    AdminPanelComponent,
    EditWindowComponent,
    UserDashboardComponent,
    DescriptionWindowComponent,
  ],
  entryComponents: [
    EditWindowComponent,
    DescriptionWindowComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    AuthGuardService,
    RoleGuardService
  ]
})
export class TodoModule { }
