import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ADMIN_ROUTES_CHILDREN } from '../core/routes/admin.routes';

const routes: Routes = [
  ...ADMIN_ROUTES_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
