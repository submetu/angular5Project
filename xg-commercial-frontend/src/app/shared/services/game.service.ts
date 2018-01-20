import {Injectable} from '@angular/core';

import {CustomHttpService} from './custom-http.service';
import {HttpOptionsModel} from '../models';

@Injectable()
export class GameService {

  constructor(private customHttpService: CustomHttpService) {}

  getAllGames() {
    let httpOptions = new HttpOptionsModel('/games', null, false, true);
    return this.customHttpService.post(httpOptions);
  }
}
