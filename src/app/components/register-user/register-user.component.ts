import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  constructor(private formBuilder: FormBuilder) {}

  registerForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    DNI: [''],
    email: [''],
    password:[''],
    address: [''],
    dob: [''],
    gender: ['']
  });
  newUserUrl = "http://localhost:3000/user/register"
  onSubmit() {
    console.log('form data is ', this.registerForm.value);
    fetch(this.newUserUrl, {
      method: "POST",
      body: JSON.stringify(this.registerForm.value),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
   }
 }
