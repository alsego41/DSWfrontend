import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.scss']
})
export class NewPropertyComponent {
  constructor(private formBuilder: FormBuilder) {}
  newPropertyForm = this.formBuilder.group({
    nameProperty: [''],
    address: [''],
    zone: [''],
    m2: [''],
    spaces: [''],
    roomQty: [''],
    bathQty: [''],
    backyard: [''],
    grill: ['']
  })
  newPropertyUrl = 'http://localhost:3000/property/new'
  onSubmit() {
    console.log(this.newPropertyForm.value)
    fetch(this.newPropertyUrl, {
      method: "POST",
      body: JSON.stringify(this.newPropertyForm.value),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
  }
}
