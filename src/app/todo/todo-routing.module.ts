import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AuthGuardService } from 'src/app/todo/guards/auth-guard.service';
import { RoleGuardService } from 'src/app/todo/guards/role-guard.service';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authorization',
    pathMatch: 'full'
  },
  {
    path: 'authorization',
    component: AuthorizationComponent,
  },
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
        component: AdminPanelComponent,
        data: {role: 'Admin'},
        canActivate: [RoleGuardService]
      },
      {
        path: 'dashboard',
        component: UserDashboardComponent
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
