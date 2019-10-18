import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import { MatButtonModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class AuthorizationModule { }
