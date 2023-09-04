import { Component, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PropertyService } from '../../services/property.service'
import { Property } from '../../models/property'

@Component({
	selector: 'app-property-details',
	templateUrl: './property-details.component.html',
	styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent {
	route: ActivatedRoute = inject(ActivatedRoute)
	propertyId: String
	propertyService: PropertyService = inject(PropertyService)
	Property: Property | undefined

	constructor() {
		this.propertyId = this.route.snapshot.params['id']
		this.propertyService
			.getPropertyById(this.propertyId)
			.subscribe((data) => (this.Property = data))
	}
}
