import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './user/user.module#UserModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

