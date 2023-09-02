import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor(private formBuilder: FormBuilder) {}
  loginForm = this.formBuilder.group({
    email: [''],
    password:['']
  });
  loginUrl = 'http://localhost:3000/user/login'
  userStatus: Boolean = false
  fetched: Boolean = false

  onSubmit() {
    console.log('form data is ', this.loginForm.value);
    fetch(this.loginUrl, {
      method: "POST",
      body: JSON.stringify(this.loginForm.value),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        if (json.status){
          localStorage.setItem("token", json.token)
          console.log("Token guardado")
          console.log(json.token)
        }
        this.userStatus = json.status
        this.fetched = true
      })
      .catch(err => console.log(err))
   }
}
