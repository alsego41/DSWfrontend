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
	filteredLocations: Observable<
		{ id: string; nombre: string; departamento: string }[]
	>

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
	selectedProvince: EventEmitter<{ id: string; nombre: string }> =
		new EventEmitter<{ id: string; nombre: string }>()

	@Output()
	selectedCity: EventEmitter<{
		id: string
		nombre: string
		departamento: string
	}> = new EventEmitter<{ id: string; nombre: string; departamento: string }>()

	placeholder: string
	constructor(private locationService: LocationService) {}

	updateMySelection(event: any): any {
		let valueId = event.option.id
		let valueNombre = event.option.value
		let valueDepartamento =
			event.option._element.nativeElement.attributes['data-depto'].value
		// console.log(event.option)
		// console.log(valueDepartamento)
		if (this.tipoFiltro === 'province') {
			this.selectedProvince.emit({ id: valueId, nombre: valueNombre })
		} else if (this.tipoFiltro === 'city-by-province') {
			this.selectedCity.emit({
				id: valueId,
				nombre: valueNombre,
				departamento: valueDepartamento,
			})
		}
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
			return {
				id: city.id,
				nombre: city.nombre,
				departamento: city.departamento,
			}
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
		const inputFormateado = value
		let regex = new RegExp(`.*${inputFormateado}.*`, 'gi')
		const filter = this.locations.filter((prov) => {
			if (regex.test(prov.nombre)) {
				return prov
			}
			return regex.test(prov.nombre)
		})
		const provincias = filter.map((prov) => {
			return { id: prov.id, nombre: prov.nombre, departamento: '' }
		})
		return provincias.slice(0, 10)
	}
}
