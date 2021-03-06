import {Injectable} from "@angular/core";

@Injectable()
export class LocalStorageService {

  setItem(key:string, value:any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key:string) {
    return JSON.parse(localStorage.getItem(key));
  }

  clear() {
    localStorage.clear();
  }
}
