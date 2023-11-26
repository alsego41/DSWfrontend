export interface Booking {
	_id: String
	status: String
	checkIn: Date
	checkOut: Date
	totalPrice: Number
	owner: String
	guest: String
	property: String
}
