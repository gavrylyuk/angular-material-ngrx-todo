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
    path: 'admin',
    loadChildren: () => import('./components/admin-panel/admin-panel.module').then(mod => mod.AdminPanelModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/user-dashboard/user-dashboard.module').then(mod => mod.UserDashboardModule)
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
