import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupListComponent } from './group-list/group-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: GroupListComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        // resolve: {
        //   page: PersonListResolver,
        // },
      },
      {
        path: 'detail',
        pathMatch: 'full',
        component: GroupDetailComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        // resolve: {
        //   page: PersonListResolver,
        // },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupRoutingModule {}
