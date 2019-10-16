import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    MatButtonModule
  ]
})
export class AuthorizationModule { }
