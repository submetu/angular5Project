import {Component, Input} from '@angular/core';

@Component({
  selector: 'game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})

export class GameItemComponent {

  @Input() public game: any;
}
