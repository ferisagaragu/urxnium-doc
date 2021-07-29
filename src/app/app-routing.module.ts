import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BASE_ROUTES } from './core/routes/base.routes';
import { REST_ROUTES } from './core/routes/rest.routes';
import { FUNCTIONAL_ROUTES } from './core/routes/functional.routes';
import { AUTH_ROUTES } from './core/routes/auth.routes';
import { ADMIN_ROUTES } from './core/routes/admin.routes';

const routes: Routes = [
  ...REST_ROUTES,
  ...FUNCTIONAL_ROUTES,
  ...AUTH_ROUTES,
  ...ADMIN_ROUTES,
  ...BASE_ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
