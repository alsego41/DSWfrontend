import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'dswfe';
  constructor(private formBuilder:FormBuilder){}

  profileForm = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    address:[''],
    DNI: [''],
    dob:[''],
    document:[''],
    mail:[''],
    password:[''],
  })

  
  
}
