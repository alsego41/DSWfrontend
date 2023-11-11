import { Component, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material/icon'
import { FormControl, FormBuilder } from '@angular/forms'
import {
	Observable,
	combineLatest,
	combineLatestWith,
	map,
	startWith,
} from 'rxjs'
import { LocationService } from 'src/app/services/location.service'
import { PropertyService } from 'src/app/services/property.service'
import { Router } from '@angular/router'

const SEARCH_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
	title = 'Busqueda'
	locationInput = new FormControl()
	filteredLocations: Observable<any[]>
	cities: any[]
	provinces: any[]
	allLocations: any[]
	selectedLocation: any

	constructor(
		iconRegistry: MatIconRegistry,
		sanitizer: DomSanitizer,
		private formBuilder: FormBuilder,
		private locationService: LocationService,
		private propertyService: PropertyService,
		private router: Router,
	) {
		iconRegistry.addSvgIconLiteral(
			'search',
			sanitizer.bypassSecurityTrustHtml(SEARCH_ICON),
		)
	}
	searchForm = this.formBuilder.group({
		locationInput: [''],
		checkin: [''],
		checkout: [''],
		roomqty: [''],
	})

	ngOnInit(): void {
		const combinedLocations = this.locationService
			.getCities()
			.pipe(combineLatestWith(this.locationService.getProvinces()))
		combinedLocations.subscribe(([cities, provinces]) => {
			this.allLocations = [...cities, ...provinces]
			console.log(this.allLocations)
			this.filteredLocations = this.locationInput.valueChanges.pipe(
				startWith(''),
				map((input) => {
					if (input !== '') {
						return this.filterLocations(input)
					}
					return []
				}),
			)
		})
	}

	private filterLocations(input: string): any[] {
		const inputFormateado = input.toLocaleLowerCase()
		let regex = new RegExp(`.*${inputFormateado}.*`, 'gi')
		const locations = this.allLocations.filter((location) => {
			if (regex.test(location.nombre.toLocaleLowerCase())) {
				return location
			}
			return regex.test(location.nombre.toLocaleLowerCase())
		})
		return locations.slice(0, 30)
	}

	public handleSearch() {
		// console.log(this.searchForm.value)
		// console.log(this.selectedLocation)
		if (this.selectedLocation.type === 'city') {
			this.propertyService
				.getPropertiesByCity({
					city: this.selectedLocation,
					booking: {
						checkInExp: this.searchForm.value.checkin,
						checkOutExp: this.searchForm.value.checkout,
						roomQtyExp: this.searchForm.value.roomqty,
					},
				})
				.subscribe((data) => {
					this.router.navigate(['/results'], {
						queryParams: {
							data: JSON.stringify(data),
							booking: JSON.stringify({
								checkInExp: this.searchForm.value.checkin,
								checkOutExp: this.searchForm.value.checkout,
							}),
						},
					})
				})
		} else {
			this.propertyService
				.getPropertiesByProvince({
					province: this.selectedLocation,
					booking: {
						checkInExp: this.searchForm.value.checkin,
						checkOutExp: this.searchForm.value.checkout,
						roomQtyExp: this.searchForm.value.roomqty,
					},
				})
				.subscribe((data) => {
					this.router.navigate(['/results'], {
						queryParams: {
							data: JSON.stringify(data),
							booking: JSON.stringify({
								checkInExp: this.searchForm.value.checkin,
								checkOutExp: this.searchForm.value.checkout,
							}),
						},
					})
				})
		}
	}

	updateMySelection(event: any): any {
		console.log('entro')
		let valueId = event.option.id
		let valueNombre = event.option.value
		let valueDepartamento =
			event.option._element.nativeElement.attributes['data-depto']?.value || ''
		let valueIdProv =
			event.option._element.nativeElement.attributes['data-idprov']?.value || ''
		let valueTipo =
			event.option._element.nativeElement.attributes['data-tipo'].value
		if (valueTipo === 'province') {
			this.selectedLocation = {
				id: valueId,
				name: valueNombre,
				type: valueTipo,
			}
		} else {
			this.selectedLocation = {
				id: valueId,
				name: valueNombre,
				departamento: valueDepartamento,
				idProv: valueIdProv,
				type: valueTipo,
			}
		}
	}
}
