import { Routes } from '@angular/router';
import { ListDocumentationComponent } from '../../admin/list-documentation/list-documentation.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../../admin/admin.module').then(m => m.AdminModule)
  }
];

export const ADMIN_ROUTES_CHILDREN: Routes = [
  {
    path: '',
    component: ListDocumentationComponent
  }
]
