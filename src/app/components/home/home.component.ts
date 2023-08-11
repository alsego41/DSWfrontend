import { Component, inject } from '@angular/core';
import { Property } from '../../models/property';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  testProperties: Property[] = []
  propertyService: PropertyService = inject(PropertyService)

  constructor() {
    this.testProperties = this.propertyService.getAllProperties()
  }
}
