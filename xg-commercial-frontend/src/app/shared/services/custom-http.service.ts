import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

import {HttpOptionsModel} from "../models";
import {LocalStorageService} from './local-storage.service';

@Injectable()
export class CustomHttpService {

  private api_url = "http://api-huseyin.xpressgaming.net/api/v1";
  private domain = 'june17.dev';

  constructor(private http:HttpClient,
              private localStorageService: LocalStorageService,
              private router: Router) {}


  post(httpOptions: HttpOptionsModel): Observable<any> {
      return this.http.post(`${this.api_url}${httpOptions.path}`, this.formatData(httpOptions.data).toString(), {headers:this.getRequestHeaders(httpOptions)})
  }

  private formatData(data) {
    let body = new URLSearchParams();
    for(let key in data) {
      if (data.hasOwnProperty(key)) {
        body.set(key, data[key]);
      }
    }
    let token = this.localStorageService.getItem('token');
    if (token) {
      body.set('boToken', token);
    }
    body.set('domain', this.domain);
    return body;
  }

  getRequestHeaders (httpOptions:HttpOptionsModel) {
    if (httpOptions.isFormData) {
      let headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
      return headers;
    } else {
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return headers;
    }
  }
}
