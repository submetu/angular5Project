import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {HomeComponent, ProfileUpdateComponent} from './pages';
import {USER_ROUTES} from './user.routes';
import {SharedModule} from '../shared/shared.module';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileUpdateComponent
  ],
  imports: [
    USER_ROUTES,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    SimpleNotificationsModule.forRoot()
  ]
})

export class UserModule {

}
