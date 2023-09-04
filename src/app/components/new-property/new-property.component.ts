import { Component, inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { PropertyService } from 'src/app/services/property.service'
import { Property } from 'src/app/models/property'

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
		zone: [''],
		m2: [''],
		spaces: [''],
		roomQty: [''],
		bathQty: [''],
		backyard: [''],
		grill: [''],
	})
	newProperty: Property
	propertyService: PropertyService = inject(PropertyService)
	onSubmit() {
		this.newProperty = {
			_id: '',
			nameProperty: this.newPropertyForm.value.nameProperty || '',
			statusProperty: '',
			photo: '',
			address: this.newPropertyForm.value.address as string,
			zone: this.newPropertyForm.value.zone as string,
			m2: Number(this.newPropertyForm.value.m2),
			spaces: Number(this.newPropertyForm.value.spaces),
			roomQty: Number(this.newPropertyForm.value.roomQty),
			bathQty: Number(this.newPropertyForm.value.bathQty),
			backyard: Boolean(this.newPropertyForm.value.backyard),
			grill: Boolean(this.newPropertyForm.value.grill),
		}
		this.propertyService.createProperty(this.newProperty).subscribe({
			next(res) {
				console.log(`Property ${res._id} creada`)
			},
			error(err) {
				console.log(err)
			},
		})
	}
}
