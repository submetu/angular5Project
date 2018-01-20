import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    let timer = Observable.timer(2000,1000);
    timer.subscribe(()=>{
      console.log('fromrouter:',this.authenticationService.isUserLoggedIn);
    });
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authenticationService.isUserLoggedIn) {
      return true; 
    }

    // // Store the attempted URL for redirecting
    // this.authenticationService.redirectUrl = url;

    // // Navigate to the login page with extras
    // this.router.navigate(['/login']);
    this.router.navigate(['/']);
    return false;
  }
}
