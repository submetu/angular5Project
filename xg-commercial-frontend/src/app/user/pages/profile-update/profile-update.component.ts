import {Component, OnInit} from '@angular/core';

import {LocalStorageService,
        EventService,
        NotificationService,
        notificationOptions,
        ProfileService} from '../../../shared';

@Component({
  selector: 'profile-update-page',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})

export class ProfileUpdateComponent implements OnInit {

  public user: any;
  public options = notificationOptions;

  constructor(private localStorageService: LocalStorageService,
              private profileService: ProfileService,
              private notificationService: NotificationService,
              private eventService: EventService) {

  }

  ngOnInit(): any {

    this.user = this.localStorageService.getItem('USER_INFO');

    this.eventService.getUserInfo()
      .subscribe(data => {
        debugger;
         this.user = data.user;
      });
  }

  updateProfile(values) {
    this.profileService.updateProfile(values)
      .subscribe(res => {
        if (res.status) {
          this.eventService.onUserInfoChange(res.data);
          this.notificationService.showSuccessMessage('Success', 'profile updated successfully');
        } else {
          this.notificationService.showErrorMessage('Error', 'Unknown error occured.Please try again');
        }
      }, err => {
        this.notificationService.showErrorMessage('Error', 'Unknown error occured.Please try again');
      });
  }
}
