import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule
} from '@angular/material';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { EditWindowComponent } from './edit-window/edit-window.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    EditWindowComponent
  ],
  entryComponents: [
    EditWindowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminPanelRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule
  ]
})
export class AdminPanelModule { }
