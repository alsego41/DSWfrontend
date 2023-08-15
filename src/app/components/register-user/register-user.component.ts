import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
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
