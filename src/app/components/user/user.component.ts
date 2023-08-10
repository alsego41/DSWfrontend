import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: [''],
    dob: [''],
    gender: ['']
  });
  onSubmit() {
    console.log('form data is ', this.profileForm.value);
   }
 }

