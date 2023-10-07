import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'
import { startWith, map } from 'rxjs/operators'
import { LocationService } from 'src/app/services/location.service'

@Component({
	selector: 'app-autocomplete',
	templateUrl: './autocomplete.component.html',
	styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
	locations: any[] = []
	locationControl = new FormControl()
	filteredLocations: Observable<{ id: string; nombre: string }[]>

	@Input()
	tipoFiltro: string

	private _selectedProvince: string

	@Input()
	set province(value: string) {
		console.log(value)
		this._selectedProvince = value
	}

	get province(): string {
		return this._selectedProvince
	}

	@Output()
	selectedProvince: EventEmitter<string> = new EventEmitter<string>()

	placeholder: string
	constructor(private locationService: LocationService) {}

	updateMySelection(event: any): any {
		let valueSelected = event.option.id
		// console.log(event)
		this.selectedProvince.emit(valueSelected)
	}

	ngOnInit(): void {
		if (this.tipoFiltro === 'province') {
			this.placeholder = 'Provincia'
			this.locationService.getProvinces().subscribe((data) => {
				this.locations = data
				this.filteredLocations = this.locationControl.valueChanges.pipe(
					startWith(''),
					map((value) => this._filterProvinces(value)),
				)
			})
		} else if (this.tipoFiltro === 'city-by-province') {
			this.placeholder = 'Ciudad'
			this.locationService.getCities().subscribe((data) => {
				this.locations = data
				this.filteredLocations = this.locationControl.valueChanges.pipe(
					startWith(''),
					map((value) => this._filterCitiesByProvince(value)),
				)
			})
		}
	}

	private _filterCitiesByProvince(value: string): any[] {
		const inputFormateado = value.toLocaleLowerCase()
		let regex = new RegExp(`.*${inputFormateado}.*`, 'gi')
		const cityProv = this.locations.filter((city) => {
			return city.provincia_id === this.province
		})
		const filter = cityProv.filter((city) => {
			return regex.test(city.nombre.toLocaleLowerCase()) === true
		})
		const nombres = filter.map((city) => {
			let nom = city.nombre + ', ' + city.departamento
			return { id: city.id, nombre: nom }
		})
		return nombres.slice(0, 10)
	}

	private _filterCities(value: string): any[] {
		const inputFormateado = value.toLocaleLowerCase()
		let regex = new RegExp(`.*${inputFormateado}.*`, 'gi')
		const filter = this.locations.filter((city) => {
			return regex.test(city.nombre.toLocaleLowerCase()) === true
		})
		const nombres = filter.map((city) => {
			return city.nombre
		})
		// console.log(nombres)
		return nombres.slice(0, 10)
	}

	// En vez de pasar solo el nombre de la provincia, pasar un objeto provincia que tenga su id y el nombre {id, nombre}
	private _filterProvinces(value: string): any[] {
		const inputFormateado = value.toLocaleLowerCase()
		let regex = new RegExp(`.*${inputFormateado}.*`, 'gi')
		const filter = this.locations.filter((prov) => {
			return regex.test(prov.nombre.toLocaleLowerCase()) === true
		})
		// console.log(filter)
		const provincias = filter.map((prov) => {
			return { id: prov.id, nombre: prov.nombre }
		})
		// console.log(nombres)
		return provincias.slice(0, 10)
	}
}
