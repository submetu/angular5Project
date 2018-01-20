import {Component, Output, EventEmitter, OnInit, Input, OnChanges} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {AuthenticationService, LocalStorageService, EventService, GameGroupService} from '../../services';


declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  moduleId: module.id
})

export class HeaderComponent implements OnInit, OnChanges {

  public loginForm: FormGroup;
  public userLoginStatus: boolean = false;
  public gameGroups: Array<object> = [];
  @Input() public user = null;
  @Input() public isUserAuthenticated: boolean = false;
  @Output() private onLogin = new EventEmitter();
  @Output() private onLogout = new EventEmitter();

  constructor(private authenticationService: AuthenticationService,
              private localStorageService: LocalStorageService,
              private eventService: EventService,
              private formBuilder: FormBuilder,
              private gameGroupService: GameGroupService) {

  }

  ngOnInit(): any {
    this.loginForm = this.formBuilder.group({
      identity: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.eventService.getAuthenticationStatus()
      .subscribe(data => {
        this.userLoginStatus = data.status;
      });
     this.gameGroupService.getGameGroups()
      .subscribe(response => {
         this.gameGroups = response.data.groups;
       });
  }

  ngOnChanges(changes) {
    //console.log(changes);
  }

  closeModal() {
    jQuery('#modal-login-register').modal('toggle');

  }

  login() {
    let values = {
      identity: this.loginForm.value.identity,
      password: this.loginForm.value.password
    };
    this.onLogin.emit(values);
  }

  logout() {
    this.onLogout.emit();
  }
}
