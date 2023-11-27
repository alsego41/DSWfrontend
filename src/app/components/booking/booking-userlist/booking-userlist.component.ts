import { AfterViewInit, Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Booking } from 'src/app/models/booking'
import { BookingService } from 'src/app/services/booking.service'

@Component({
	selector: 'app-booking-userlist',
	templateUrl: './booking-userlist.component.html',
	styleUrls: ['./booking-userlist.component.scss'],
})
export class BookingUserlistComponent implements AfterViewInit {
	constructor(private bookingService: BookingService, private title: Title) {
		this.title.setTitle('Mis reservas - GU Alquileres')
	}
	bookingList: any[] = []

	ngAfterViewInit(): void {
		this.bookingService.getUserBookings().subscribe((data) => {
			this.bookingList = data
		})
	}
}
