import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { LoginAuth, LoginBody } from '../models/login-auth'
import { Property } from '../models/property'
import { User } from '../models/user'

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}
	private baseUrl: string =
		(import.meta.env.NG_APP_API_BASE_URL as string) || 'http://localhost:3000'

	login(body: LoginBody): Observable<LoginAuth> {
		return this.http.post<LoginAuth>(`${this.baseUrl}/user/login`, body)
	}

	logout(): void {
		localStorage.removeItem('token')
		return
	}

	getUserProperties(token: String): Observable<{ properties: Property[] }> {
		return this.http.get<{ properties: Property[] }>(
			`${this.baseUrl}/user/properties`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		)
	}

	getInfo(): Observable<any> {
		const token = localStorage.getItem('token') || ''
		return this.http.get<any>(`${this.baseUrl}/user/info`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	}

	register(user: User): Observable<any> {
		return this.http.post<User>(`${this.baseUrl}/sh/newuser`, {
			user,
			userType: { nameType: 'Guest' },
		})
	}
}
