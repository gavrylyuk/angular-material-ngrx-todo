import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { MainPageModule } from './components/main-page/main-page.module';
import { AuthorizationModule } from './components/authorization/authorization.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MainPageModule,
    AuthorizationModule
  ]
})
export class TodoModule { }
