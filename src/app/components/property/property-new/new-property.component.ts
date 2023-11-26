import { Component, inject } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { PropertyService } from 'src/app/services/property.service'
import { Property } from 'src/app/models/property'
import { UserService } from 'src/app/services/user.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-new-property',
	templateUrl: './new-property.component.html',
	styleUrls: ['./new-property.component.scss'],
})
export class NewPropertyComponent {
	constructor(
		private formBuilder: FormBuilder,
		private snackBarService: SnackbarService,
		private router: Router,
	) {}
	newPropertyForm = this.formBuilder.group({
		nameProperty: [''],
		address: [''],
		province: [''],
		city: [''],
		zone: [''],
		m2: ['', Validators.min(0)],
		spaces: ['', Validators.min(0)],
		roomQty: ['', Validators.min(0)],
		bathQty: ['', Validators.min(0)],
		price: ['', Validators.min(0)],
		state: [''],
		backyard: [''],
		grill: [''],
	})
	newProperty: Property
	propertyService: PropertyService = inject(PropertyService)
	userService: UserService = inject(UserService)

	provinceSelected = {
		id: '',
		nombre: '',
	}
	citySelected = {
		id: '',
		nombre: '',
		departamento: '',
	}

	selectProvince(event: { id: string; nombre: string }) {
		this.provinceSelected.id = event.id
		this.provinceSelected.nombre = event.nombre
	}
	selectCity(event: { id: string; nombre: string; departamento: string }) {
		// console.log(event)
		this.citySelected.id = event.id
		this.citySelected.nombre = event.nombre
		this.citySelected.departamento = event.departamento
	}

	sumbittedState: boolean = false

	onSubmit() {
		this.sumbittedState = true
		// console.log()
		if (this.newPropertyForm.valid) {
			this.newProperty = {
				_id: '',
				nameProperty: this.newPropertyForm.value.nameProperty as string,
				statusProperty: this.newPropertyForm.value.state as string,
				photo: '',
				address: this.newPropertyForm.value.address as string,
				city: '',
				province: '',
				zone: this.newPropertyForm.value.zone as string,
				m2: Number(this.newPropertyForm.value.m2),
				spaces: Number(this.newPropertyForm.value.spaces),
				roomQty: Number(this.newPropertyForm.value.roomQty),
				bathQty: Number(this.newPropertyForm.value.bathQty),
				backyard: Boolean(this.newPropertyForm.value.backyard),
				grill: Boolean(this.newPropertyForm.value.grill),
				price: Number(this.newPropertyForm.value.price),
				user: '',
			}
			let _this = this
			this.propertyService
				.createProperty(
					this.newProperty,
					this.provinceSelected,
					this.citySelected,
					localStorage.getItem('token') || '',
				)
				.subscribe({
					next(res) {
						_this.snackBarService.setSBTitle(
							`Su nueva propiedad fue creada con éxito`,
						)
						_this.router.navigate(['/user/ownerlist'])
					},
					error(err) {
						_this.snackBarService.setSBTitle(`Su propiedad no pudo ser creada`)
						_this.sumbittedState = false
					},
				})
		} else {
			this.snackBarService.setSBTitle(
				`Su propiedad no puede ser creada - Falta información`,
			)
			this.sumbittedState = false
		}
	}
}
