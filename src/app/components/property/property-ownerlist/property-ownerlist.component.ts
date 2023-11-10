import { AfterViewInit, Component } from '@angular/core'
import { PropertyService } from 'src/app/services/property.service'
import { Property } from 'src/app/models/property'

@Component({
	selector: 'app-property-ownerlist',
	templateUrl: './property-ownerlist.component.html',
	styleUrls: ['./property-ownerlist.component.scss'],
})
export class PropertyOwnerlistComponent implements AfterViewInit {
	constructor(private propertyService: PropertyService) {}
	properties: Property[] = []

	ngAfterViewInit(): void {
		const _this = this
		this.propertyService
			.getOwnerProperties(localStorage.getItem('token') || '')
			.subscribe({
				next(value) {
					_this.properties = value
				},
				error(err) {
					console.log(err)
				},
			})
	}
}
