import { Component, Input } from '@angular/core';
import { Property } from 'src/app/models/property';
/*
const url = "https://api.mockfly.dev/mocks/77db3a67-d2fa-43cb-84bb-99ab3647ac39/"


async function getData() {
  const res = await fetch(url)
  const list = await res.json()
  return list.depas
}*/

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent {
  constructor(){
   // getData()
  }
  @Input() Property!: Property

  
}
