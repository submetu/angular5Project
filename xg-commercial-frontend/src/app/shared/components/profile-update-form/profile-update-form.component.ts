import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'profile-update-form',
  templateUrl: './profile-update-form.component.html',
  styleUrls: ['./profile-update-form.component.css']
})

export class ProfileUpdateFormComponent implements OnInit {

  private profileUpdateForm: FormGroup;
  @Input() private user;
  @Output() private updateUserProfile = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): any {
    this.profileUpdateForm = this.formBuilder.group({
      firstname: [this.user.firstname, Validators.required],
      lastname: [this.user.lastname, Validators.required]
    })
  }

  updateProfile() {
    this.updateUserProfile.emit(this.profileUpdateForm.value);
  }
}
