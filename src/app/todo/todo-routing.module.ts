import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';


const routes: Routes = [
  {
    path: 'authorization',
    component: AuthorizationComponent
  },
  {
    path: 'todo',
    redirectTo: 'todo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
