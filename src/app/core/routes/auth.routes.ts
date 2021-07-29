import { Routes } from '@angular/router';
import { SignInComponent } from '../../auth/sign-in/sign-in.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../../auth/auth.module').then(m => m.AuthModule)
  }
];

export const AUTH_ROUTES_CHILDREN: Routes = [
  {
    path: '',
    component: SignInComponent
  }
]
