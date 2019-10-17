import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { RoleGuardService } from 'src/app/guards/role-guard.service';


const routes: Routes = [
  {
    path: 'todo',
    component: MainPageComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin-panel/admin-panel.module').then(mod => mod.AdminPanelModule),
        data: {role: 'Admin'},
        canActivate: [RoleGuardService]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../user-dashboard/user-dashboard.module').then(mod => mod.UserDashboardModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
