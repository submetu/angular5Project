//modal-login-register
import {Component, Input, OnChanges} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'authentication-modal',
  templateUrl: './authentication-modal.component.html',
  styleUrls: ['./authentication-modal.component.css']
})

export class AuthenticationModalComponent implements OnChanges {

  @Input() private modalStatus: boolean = false;

  ngOnChanges(changes) {
    console.log(changes);
    if (changes.modalStatus) {
      jQuery('#modal-login-register').modal('toggle');
    }
  }
}
