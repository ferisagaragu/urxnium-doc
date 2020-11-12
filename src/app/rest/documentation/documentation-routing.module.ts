import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DOCUMENTATION_ROUTES_CHILDREN } from '../../core/routes/rest.routes';

const routes: Routes = [
  ...DOCUMENTATION_ROUTES_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
