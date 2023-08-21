import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  host: {'class': 'user-comp'}
})
export class UserComponent {
  constructor(private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    DNI: [''],
    mail: [''],
    passwor:[''],
    address: [''],
    dob: [''],
    gender: ['']
  });
  onSubmit() {
    console.log('form data is ', this.profileForm.value);
   }
 }

