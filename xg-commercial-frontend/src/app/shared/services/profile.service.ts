import {Injectable} from '@angular/core';

import {CustomHttpService} from './custom-http.service';
import {HttpOptionsModel} from '../models';

@Injectable()
export class ProfileService {

  constructor(private customHttpService: CustomHttpService) {

  }

  updateProfile(data) {
    let httpOptions = new HttpOptionsModel('/profile/update', data, false, true);
    return this.customHttpService.post(httpOptions);
  }

}
