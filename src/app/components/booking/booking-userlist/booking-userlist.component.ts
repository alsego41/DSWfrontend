import { AfterViewInit, Component } from '@angular/core'
import { Booking } from 'src/app/models/booking'
import { BookingService } from 'src/app/services/booking.service'

@Component({
	selector: 'app-booking-userlist',
	templateUrl: './booking-userlist.component.html',
	styleUrls: ['./booking-userlist.component.scss'],
})
export class BookingUserlistComponent implements AfterViewInit {
	constructor(private bookingService: BookingService) {}
	bookingList: Booking[] = []

	ngAfterViewInit(): void {
		this.bookingService.getUserBookings().subscribe((data) => console.log(data))
	}
}
