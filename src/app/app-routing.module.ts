import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';


const routes: Routes = [
  {
    path: 'authorization',
    component: AuthorizationComponent
  },
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

