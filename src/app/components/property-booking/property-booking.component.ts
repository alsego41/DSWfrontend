import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
	selector: 'app-property-booking',
	templateUrl: './property-booking.component.html',
	styleUrls: ['./property-booking.component.scss'],
})
export class PropertyBookingComponent implements OnInit {
	checkIn: string
	checkOut: string
	propertyId: string
	userId: string
	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		// Retrieve query parameters
		this.route.queryParams.subscribe((params) => {
			this.propertyId = this.route.snapshot.params['id']
			this.checkIn = params['checkIn']
			this.checkOut = params['checkOut']
			this.userId = localStorage.getItem('token') || ''
		})
		console.log(this.checkIn)
		console.log(this.checkOut)

		// call service get property
		// call service get user

		// after payment, go to confirmation page
	}
}
