import { Injectable } from '@angular/core'
import { Property } from '../models/property'
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'

@Injectable({
	providedIn: 'root',
})
export class PropertyService {
	constructor(private http: HttpClient) {}
	baseUrl: String = 'http://localhost:3000'

	getAllProperties(): Observable<Property[]> {
		return this.http.get<Property[]>(`${this.baseUrl}/property`)
	}

	getPropertyById(id: String): Observable<Property> {
		return this.http.get<Property>(`${this.baseUrl}/property/${id}`)
	}

	createProperty(property: Property, token: String): Observable<Property> {
		return this.http.post<Property>(`${this.baseUrl}/property/new`, {
			property,
			token,
		})
	}
}
