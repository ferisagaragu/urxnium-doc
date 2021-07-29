import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AUTH_ROUTES_CHILDREN } from '../core/routes/auth.routes';

const routes: Routes = [
  ...AUTH_ROUTES_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
