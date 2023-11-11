import { Injectable } from '@angular/core'
import { Booking } from '../models/booking.js'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class BookingService {
	private baseUrl: string =
		(import.meta.env.NG_APP_API_BASE_URL as string) || 'http://localhost:3000'

	constructor(private http: HttpClient) {}

	getUserBookings(): Observable<Booking[]> {
		const token = localStorage.getItem('token') || ''
		return this.http.get<Booking[]>(`${this.baseUrl}/booking/guest`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	}

	createBooking(info: {
		checkIn: string
		checkOut: string
		propertyId: string
	}): Observable<Booking> {
		const token = localStorage.getItem('token') || ''
		return this.http.post<Booking>(`${this.baseUrl}/sh/newBooking`, {
			booking: {
				checkIn: info.checkIn,
				checkOut: info.checkOut,
			},
			property: { id: info.propertyId },
			token,
		})
	}
}
