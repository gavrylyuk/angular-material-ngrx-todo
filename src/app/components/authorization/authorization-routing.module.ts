import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorizationComponent} from './authorization.component';


const routes: Routes = [
  {path: '', component: AuthorizationComponent},
  {
    path: 'admin',
    loadChildren: () => import('../admin-panel/admin-panel.module').then(mod => mod.AdminPanelModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../user-dashboard/user-dashboard.module').then(mod => mod.UserDashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
