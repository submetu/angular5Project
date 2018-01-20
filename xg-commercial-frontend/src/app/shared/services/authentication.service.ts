import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Router } from '@angular/router';

import {CustomHttpService} from './custom-http.service';
import {HttpOptionsModel,User} from '../models';
import {EventService} from './event.service';

@Injectable()
export class AuthenticationService {

  public isUserLoggedIn:Boolean = false
  public alive:boolean = false;
  private interval:number = 5000;

  constructor(private customHttpService: CustomHttpService, private eventService: EventService, private router: Router) {}

  public initSite(): Observable<any>  {
    let httpOptionsModel = new HttpOptionsModel('/init', null, false, true);
    return this.customHttpService.post(httpOptionsModel);
  }

  public login(values) {
    let httpOptions = new HttpOptionsModel('/login', values, false, true);
    return this.customHttpService.post(httpOptions);
  }

  public logout() {
    let httpOptions = new HttpOptionsModel('/logout', null, false, true);
    return this.customHttpService.post(httpOptions);
  }

  public loginManager(user, willValidate ){
    var userExists = typeof user !== 'undefined'; 
    if(userExists){
      this.initializeUser(user);
    }else{
       this.killUser();
    }

    willValidate ? this.validateSite() : false; 
   
  }
  private initializeUser(user){
    let userModel = new User(user);
    this.eventService.onUserInfoChange(userModel);
    this.eventService.onAuthenticationStatusChange(true);
    this.alive = true;
  }

  private killUser(){
    this.eventService.onUserInfoChange(null);
    this.eventService.onAuthenticationStatusChange(false);
    this.alive = false;
    this.router.navigate(['/']);
  }

  private validateSite() {
    TimerObservable.create(0, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.initSite()
          .subscribe((res) => {
            this.loginManager(res.data.user,false);
          });
      });
  }
  
}
