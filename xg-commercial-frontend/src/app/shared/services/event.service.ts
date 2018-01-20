import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EventService {

  private authenticationStatus = new Subject();
  private userInfo = new Subject();

  onAuthenticationStatusChange(status:boolean) {
    this.authenticationStatus.next({status:status});
  }

  getAuthenticationStatus(): Observable<any> {
    return this.authenticationStatus.asObservable();
  }

  onUserInfoChange(user: Object) {
    this.userInfo.next({user: user});
  }

  getUserInfo(): Observable<any> {
    return this.userInfo.asObservable();
  }
}
