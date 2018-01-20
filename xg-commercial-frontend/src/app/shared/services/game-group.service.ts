import {Injectable} from '@angular/core';

import {CustomHttpService} from './custom-http.service';
import {HttpOptionsModel} from '../models';

@Injectable()
export class GameGroupService {

  constructor(private customHttpService: CustomHttpService){}

  getGameGroups() {
    let httpOptions = new HttpOptionsModel('/game/groups', null, false, true);
    return this.customHttpService.post(httpOptions);
  }

}
