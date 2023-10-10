import { Component, inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { PropertyService } from 'src/app/services/property.service'
import { Property } from 'src/app/models/property'
import { UserService } from 'src/app/services/user.service'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-new-property',
	templateUrl: './new-property.component.html',
	styleUrls: ['./new-property.component.scss'],
})
export class NewPropertyComponent {
	constructor(private formBuilder: FormBuilder) {}
	newPropertyForm = this.formBuilder.group({
		nameProperty: [''],
		address: [''],
		province: [''],
		city: [''],
		zone: [''],
		m2: [''],
		spaces: [''],
		roomQty: [''],
		bathQty: [''],
		price: [''],
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

	onSubmit() {
		this.newProperty = {
			_id: '',
			nameProperty: this.newPropertyForm.value.nameProperty as string,
			statusProperty: this.newPropertyForm.value.state as string,
			photo: '',
			address: this.newPropertyForm.value.address as string,
			city: '',
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
					console.log(res)
				},
				error(err) {
					console.log(err)
				},
			})
	}
}
