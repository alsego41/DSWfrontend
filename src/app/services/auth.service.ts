import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private baseUrl: string =
		(import.meta.env.NG_APP_API_BASE_URL as string) || 'http://localhost:3000'

	constructor() {}

	async verifyToken() {
		const token: String = localStorage.getItem('token') || ''
		if (token) {
			const res = await fetch(`${this.baseUrl}/user/verify`, {
				method: 'POST',
				body: JSON.stringify({ token: token }),
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
