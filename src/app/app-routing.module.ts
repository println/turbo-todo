import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from './modules/layout/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      loadChildren: () => import('./modules/domain/domain.module').then((m) => m.DomainModule),
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
