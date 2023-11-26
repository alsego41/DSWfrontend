import { Injectable } from '@angular/core'
import { LoginAuth, LoginBody } from '../models/login-auth'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private baseUrl: string =
		(import.meta.env.NG_APP_API_BASE_URL as string) || 'http://localhost:3000'
	private userData: any

	constructor(private http: HttpClient) {}

	login(loginInfo: LoginBody): Observable<LoginAuth> {
		return this.http.post<LoginAuth>(`${this.baseUrl}/user/login`, loginInfo)
	}

	getUserData(): any {
		return this.userData
	}

	setUserData(userData: any): void {
		this.userData = userData
	}

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
				return true
			} else {
				return false
			}
		} else {
			return false
		}
	}
}
