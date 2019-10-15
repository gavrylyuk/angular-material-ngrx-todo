import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { DescriptionWindowComponent } from './description-window/description-window.component';

import {
  MatIconModule,
  MatTableModule,
  MatButtonModule,
  MatDialogModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [
    UserDashboardComponent,
    DescriptionWindowComponent
  ],
  entryComponents: [
    DescriptionWindowComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule
  ]
})
export class UserDashboardModule { }
