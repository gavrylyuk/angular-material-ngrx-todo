import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'authorization', pathMatch: 'full'
  },
  {
    path: 'authorization',
    loadChildren: () => import('./components/authorization/authorization.module').then(mod => mod.AuthorizationModule)
  },
  {
    path: '**',
    redirectTo: 'authorization', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
