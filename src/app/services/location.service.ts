import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class LocationService {
	private provincesUrl = 'assets/files/provincias.json'
	private citiesUrl = 'assets/files/localidades.json'

	constructor(private http: HttpClient) {}

	getProvinces(): Observable<any> {
		return this.http.get<any>(this.provincesUrl)
	}

	getCities(): Observable<any> {
		return this.http.get<any>(this.citiesUrl)
	}
}
