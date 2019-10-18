import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { AuthGuardService } from 'src/app/todo/guards/auth-guard.service';
import { RoleGuardService } from 'src/app/todo/guards/role-guard.service';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    AuthGuardService,
    RoleGuardService
  ]
})
export class MainPageModule { }
