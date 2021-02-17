import { Routes } from '@angular/router';
import { RestComponent } from '../../rest/rest.component';
import { ServiceComponent } from '../../rest/documentation/service/service.component';
import { HomeComponent } from '../../rest/dashboard/home/home.component';

export const REST_ROUTES: Routes = [
  {
    path: 'rest',
    loadChildren: () => import('../../rest/rest.module').then(m => m.RestModule)
  }
];

export const REST_ROUTES_CHILDREN: Routes = [
  {
    path: '',
    component: RestComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../rest/dashboard/dashboard.module').then(m => m.DashboardModule)
      },{
        path: 'documentation/:controllerName/:mapping/:access',
        loadChildren: () => import('../../rest/documentation/documentation.module').then(m => m.DocumentationModule)
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
    component: ServiceComponent
  }
];

