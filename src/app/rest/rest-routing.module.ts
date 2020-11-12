import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { REST_ROUTES_CHILDREN } from '../core/routes/rest.routes';

const routes: Routes = [
  ...REST_ROUTES_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestRoutingModule { }
