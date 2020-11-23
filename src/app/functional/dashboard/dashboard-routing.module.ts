import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES_CHILDREN } from '../../core/routes/functional.routes';

const routes: Routes = [
  ...DASHBOARD_ROUTES_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
