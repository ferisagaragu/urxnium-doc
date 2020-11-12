import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BASE_ROUTES } from './core/routes/base.routes';
import { REST_ROUTES } from './core/routes/rest.routes';

const routes: Routes = [
  ...REST_ROUTES,
  ...BASE_ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
