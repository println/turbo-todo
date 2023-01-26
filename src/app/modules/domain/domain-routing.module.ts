import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE } from '@config';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTE.dashboard.path,
  },
  {
    path: ROUTE.dashboard.id,
    pathMatch: 'full',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: ROUTE.settings.id,
    pathMatch: 'prefix',
    loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: ROUTE.group.id,
    pathMatch: 'prefix',
    loadChildren: () => import('./group/group.module').then((m) => m.GroupModule),
  },
  {
    path: ROUTE.task.id,
    pathMatch: 'full',
    loadChildren: () => import('./task/task.module').then((m) => m.TaskModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DomainRoutingModule {}
