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

	getOwnerBookings(): Observable<Booking[]> {
		const token = localStorage.getItem('token') || ''
		return this.http.get<Booking[]>(`${this.baseUrl}/booking/owner`, {
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

	calculateTotal(checkIn: string, checkOut: string, price: any) {
		const checkInExp = new Date(checkIn)
		const checkOutExp = new Date(checkOut)
		const dias = this.dateDiffInDays(checkInExp, checkOutExp)
		return dias * price
	}

	private dateDiffInDays(start: Date, end: Date) {
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
