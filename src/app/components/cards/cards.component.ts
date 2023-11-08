import { Component, Input } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Property } from 'src/app/models/property'

@Component({
	selector: 'app-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
	searchData: Property[]
	bookingInfo: any
	constructor(private router: Router, private route: ActivatedRoute) {
		this.route.queryParams.subscribe((params) => {
			this.searchData = JSON.parse(params['data']).propsFiltered
			this.bookingInfo = JSON.parse(params['booking'])
		})
	}
}
