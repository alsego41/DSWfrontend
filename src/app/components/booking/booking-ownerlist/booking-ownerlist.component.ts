import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { BookingService } from 'src/app/services/booking.service'

@Component({
	selector: 'app-booking-ownerlist',
	templateUrl: './booking-ownerlist.component.html',
	styleUrls: ['./booking-ownerlist.component.scss'],
})
export class BookingOwnerlistComponent implements OnInit {
	constructor(private bookingService: BookingService, private title: Title) {
		this.title.setTitle('Reservas de mis propiedades - GU Alquileres')
	}
	bookingList: any[]

	ngOnInit(): void {
		this.bookingService.getOwnerBookings().subscribe((data) => {
			console.log(data)
			this.bookingList = data
		})
	}
}
