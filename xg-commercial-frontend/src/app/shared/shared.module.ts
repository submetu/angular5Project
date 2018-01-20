import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HeaderComponent,
        ImageSliderComponent,
        GameItemComponent,
        ProfileUpdateFormComponent,
        AuthenticationModalComponent,
        FooterComponent} from './';
import {
  CustomHttpService,
  AuthenticationService,
  EventService,
  GameService,
  ProfileService,
  LocalStorageService,
  NotificationService,
  GameGroupService,
  AuthGuardService
} from './services';

@NgModule({
  declarations: [
    HeaderComponent,
    AuthenticationModalComponent,
    ImageSliderComponent,
    GameItemComponent,
    ProfileUpdateFormComponent,
    FooterComponent
  ],
  providers: [
    CustomHttpService,
    LocalStorageService,
    EventService,
    GameService,
    ProfileService,
    NotificationService,
    GameGroupService,
    AuthGuardService

  ],
  exports: [
    HeaderComponent,
    ImageSliderComponent,
    AuthenticationModalComponent,
    GameItemComponent,
    ProfileUpdateFormComponent,
    FooterComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule
  ]
})

export class SharedModule {}
