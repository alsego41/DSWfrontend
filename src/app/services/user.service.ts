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
	baseUrl: String = 'http://localhost:3000'

	login(body: LoginBody): Observable<LoginAuth> {
		return this.http.post<LoginAuth>(`${this.baseUrl}/user/login`, body)
	}

	appendNewProperty(idProperty: String, token: String): Observable<Object> {
		return this.http.patch<Object>(`${this.baseUrl}/user/properties/new`, {
			idProperty,
			token,
		})
	}

	getUserProperties(token: String): Observable<{ properties: Property[] }> {
		return this.http.get<{ properties: Property[] }>(
			`${this.baseUrl}/user/properties`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		)
	}

	register(newUser: User): Observable<any> {
		return this.http.post<User>(`${this.baseUrl}/user/register`, newUser)
	}
}
