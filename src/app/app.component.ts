import { Component } from '@angular/core';
import { Property } from './models/property';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'dswfe';

  testProperty: Property = {
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
  }
}
