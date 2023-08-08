import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Property } from './models/property';


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
    dob:[''],
    document:[''],
    mail:[''],
    password:[''],
  })

  testProperties: Property[] = [
    {
      idProperty: 102,
      nameProperty: "Casa elegante Barrio España",
      statusProperty: "Disponible",
      photo: "./assets/testcasa.jpg",
      address: "Buenos Aires 132",
      zone: "España",
      m2: 40,
      spaces: 3,
      roomQty: 2,
      bathQty: 1,
      backyard: true,
      grill: false
    },
    {
      idProperty: 103,
      nameProperty: "Casa elegante Barrio Martin",
      statusProperty: "Disponible",
      photo: "./assets/testcasa.jpg",
      address: "Buenos Aires 132",
      zone: "Martin",
      m2: 50,
      spaces: 3,
      roomQty: 2,
      bathQty: 1,
      backyard: true,
      grill: false
    },
    {
      idProperty: 104,
      nameProperty: "Casa elegante Barrio Banana",
      statusProperty: "Disponible",
      photo: "./assets/testcasa.jpg",
      address: "Buenos Aires 132",
      zone: "Banana",
      m2: 30,
      spaces: 3,
      roomQty: 2,
      bathQty: 1,
      backyard: true,
      grill: false
    },
    {
      idProperty: 105,
      nameProperty: "Casa elegante Barrio Urquiza",
      statusProperty: "Disponible",
      photo: "./assets/testcasa.jpg",
      address: "Buenos Aires 132",
      zone: "Urquiza",
      m2: 40,
      spaces: 3,
      roomQty: 2,
      bathQty: 1,
      backyard: true,
      grill: false
    },
    {
      idProperty: 106,
      nameProperty: "Casa elegante Barrio Chascomus",
      statusProperty: "Disponible",
      photo: "./assets/testcasa.jpg",
      address: "Buenos Aires 132",
      zone: "Chascomus",
      m2: 40,
      spaces: 3,
      roomQty: 2,
      bathQty: 1,
      backyard: true,
      grill: false
    },
  ]
  
}
