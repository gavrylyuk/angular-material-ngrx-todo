import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';

import {
  MatCardModule,
  MatCheckboxModule,
  MatListModule
} from '@angular/material';


@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
  ]
})
export class AdminPanelModule { }
