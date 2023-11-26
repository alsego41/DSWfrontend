import { Component, inject } from '@angular/core'
import { Property } from '../../models/property'
import { PropertyService } from '../../services/property.service'
import { Title } from '@angular/platform-browser'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	properties: Property[] = []
	propertyService: PropertyService = inject(PropertyService)

	constructor(private title: Title) {
		title.setTitle('Home - GU Alquileres')
	}
}
