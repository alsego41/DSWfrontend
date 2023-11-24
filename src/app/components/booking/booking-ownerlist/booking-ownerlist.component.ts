import { Component, OnInit } from '@angular/core'
import { BookingService } from 'src/app/services/booking.service'

@Component({
	selector: 'app-booking-ownerlist',
	templateUrl: './booking-ownerlist.component.html',
	styleUrls: ['./booking-ownerlist.component.scss'],
})
export class BookingOwnerlistComponent implements OnInit {
	constructor(private bookingService: BookingService) {}
	bookingList: any[]

	ngOnInit(): void {
		this.bookingService.getOwnerBookings().subscribe((data) => {
			console.log(data)
			this.bookingList = data
		})
	}
}
