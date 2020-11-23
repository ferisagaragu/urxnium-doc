import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FUNCTIONAL_ROUTES_CHILDREN } from '../core/routes/functional.routes';

const routes: Routes = [
  ...FUNCTIONAL_ROUTES_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionalRoutingModule { }
