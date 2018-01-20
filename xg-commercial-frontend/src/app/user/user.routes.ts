import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {HomeComponent, ProfileUpdateComponent} from './pages';
import {AuthGuardService} from '../shared/services/auth-guard.service';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path:'profile-update',
        canActivate: [AuthGuardService],
        component: ProfileUpdateComponent,
        pathMatch: 'full'
      }
    ]
  }
];

export const USER_ROUTES: ModuleWithProviders = RouterModule.forChild(ROUTES);
