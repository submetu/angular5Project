import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';

import { Observable } from "rxjs";

import {AuthenticationService, LocalStorageService,EventService} from './shared/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public closeModal: boolean = false;
  public user: object = null;
  public isUserAuthenticated: boolean = false;
  @ViewChild('headerComponent') private headerComponent;

  constructor(private authenticationService: AuthenticationService,
              private eventService: EventService,
              private localStorageService: LocalStorageService) {

  }

  ngOnInit(): any {
    this.setEvents();
    this.initSite();
  }

  ngOnDestroy(): any {
    this.authenticationService.alive = false;
    this.isUserAuthenticated= false;
    this.authenticationService.isUserLoggedIn = false;
  }


  private setEvents(): void {
    this.eventService.getUserInfo()
      .subscribe(data => {
        this.setUserData(data.user); 
      });
    this.eventService.getAuthenticationStatus()
      .subscribe(data => {
        this.setUserStatus(data.status);
      });
  }

  private initSite(): Promise<any>{
    return new Promise<any>((resolve, reject) => { 
        this.authenticationService.initSite()
        .subscribe(res => {
          var token = res.token;
          if (token) {
            this.setToken(token);
          }
          this.authenticationService.loginManager(res.data.user, true);
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  private setUserData(user):void {
    this.user = user;
    this.localStorageService.setItem('USER_INFO', user);
  } 

  private setUserStatus(status){
    this.isUserAuthenticated = status;
    this.authenticationService.isUserLoggedIn = status;
  }

  private setToken(token){
    this.localStorageService.setItem("token", token);
  }

  public onLogin(values) {
    this.authenticationService.login(values)
      .subscribe(res => {
        if (res.status) {
          this.headerComponent.closeModal();
          this.authenticationService.loginManager(res.data.user,true);
        }
      }, err => {
        console.log(err);
      }, () => {
      });
  }

  public onLogout() {
    this.authenticationService.logout()
      .subscribe(res => {
        if (res.status) {
          this.authenticationService.loginManager(res.data.user,false);
          this.initSite()
            .then(status => {
              this.authenticationService.alive = false;
            })
            .catch(err => {
              console.log(err);
            });
        }
      });

  }
}
