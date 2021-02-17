import { Routes } from '@angular/router';
import { FunctionalComponent } from '../../functional/functional.component';
import { CardFunctionalComponent } from '../../functional/documentation/card-functional/card-functional.component';
import { HomeComponent } from '../../functional/dashboard/home/home.component';

export const FUNCTIONAL_ROUTES: Routes = [
  {
    path: 'functional',
    loadChildren: () => import('../../functional/functional.module').then(m => m.FunctionalModule)
  }
];

export const FUNCTIONAL_ROUTES_CHILDREN: Routes = [
  {
    path: '',
    component: FunctionalComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../functional/dashboard/dashboard.module').then(m => m.DashboardModule)
      },{
        path: 'documentations/:controllerName/:name/:access',
        loadChildren: () => import('../../functional/documentation/documentation.module').then(m => m.DocumentationModule)
      }
    ]
  }
];

export const DASHBOARD_ROUTES_CHILDREN: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export const DOCUMENTATION_ROUTES_CHILDREN: Routes = [
  {
    path: '',
    component: CardFunctionalComponent
  }
];

