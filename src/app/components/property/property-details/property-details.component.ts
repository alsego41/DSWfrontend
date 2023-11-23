import { Component, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PropertyService } from '../../../services/property.service'
import { Property } from '../../../models/property'

@Component({
	selector: 'app-property-details',
	templateUrl: './property-details.component.html',
	styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent {
	route: ActivatedRoute = inject(ActivatedRoute)
	propertyId: String
	propertyService: PropertyService = inject(PropertyService)
	Property: any
	checkIn: any
	checkOut: any
	cantDias: number

	constructor() {
		this.route.queryParams.subscribe((params) => {
			this.propertyId = this.route.snapshot.params['id']
			this.checkIn = params['checkIn']
			this.checkOut = params['checkOut']
		})
		this.propertyService
			.getPropertyByIdFull(this.propertyId)
			.subscribe((data) => (this.Property = data))

		const checkInExp = new Date(this.checkIn)
		const checkOutExp = new Date(this.checkOut)
		this.cantDias = this.dateDiffInDays(checkInExp, checkOutExp)
	}

	calculateTotal(dias: number, price: any) {
		return dias * price
	}

	dateDiffInDays(start: Date, end: Date) {
		const _MS_PER_DAY = 1000 * 60 * 60 * 24
		const utc1 = Date.UTC(
			start.getFullYear(),
			start.getMonth(),
			start.getDate(),
		)
		const utc2 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate())
		return Math.floor((utc2 - utc1) / _MS_PER_DAY)
	}
}
