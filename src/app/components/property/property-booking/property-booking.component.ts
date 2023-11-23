import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BookingService } from 'src/app/services/booking.service'
import { PropertyService } from 'src/app/services/property.service'

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
	Property: any
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private bookingService: BookingService,
		private propertyService: PropertyService,
	) {}

	ngOnInit() {
		this.route.queryParams.subscribe((params) => {
			this.propertyId = this.route.snapshot.params['id']
			this.checkIn = params['checkIn']
			this.checkOut = params['checkOut']
			this.userId = localStorage.getItem('token') || ''
		})
		this.propertyService
			.getPropertyByIdFull(this.propertyId)
			.subscribe((data) => (this.Property = data))
		// console.log(this.checkIn)
		// console.log(this.checkOut)

		// call service get property
		// call service get user

		// after payment, go to confirmation page
	}

	calculateTotal(checkInExp: string, checkOutExp: string, price: number) {
		let total = this.bookingService.calculateTotal(
			checkInExp,
			checkOutExp,
			price,
		)
		return total
	}

	createBooking() {
		this.bookingService
			.createBooking({
				checkIn: this.checkIn,
				checkOut: this.checkOut,
				propertyId: this.propertyId,
			})
			.subscribe((data) => {
				this.router.navigateByUrl('/user/bookings')
				console.log(data)
				// display snackbar
			})
	}
}
