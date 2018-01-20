import {Component, OnInit} from '@angular/core';

import {GameService} from '../../../shared';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})

export class HomeComponent implements OnInit {

  public games;

  constructor(private gameService: GameService) {

  }

  ngOnInit(): any {
    this.gameService.getAllGames()
      .subscribe(res => {
         this.games = Object.values(res.data.games);
         //this.games = res.data.games;
      })

  }

}
