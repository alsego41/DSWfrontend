import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private token: String = localStorage.getItem('token') || ''
	private baseUrl = 'https://gualquileres.onrender.com/'

	constructor() {}

	async verifyToken() {
		if (this.token) {
			const res = await fetch(`${this.baseUrl}/user/verify`, {
				method: 'POST',
				body: JSON.stringify({ token: this.token }),
				headers: { 'Content-type': 'application/json; charset=UTF-8' },
			})
			if (res.status === 200) {
				const json = await res.json()
				console.log(json.payload)
				return true
			} else {
				console.log(res.status)
				return false
			}
		} else {
			return false
		}
	}
}
