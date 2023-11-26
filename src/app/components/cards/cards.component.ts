import { Component, Input } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
	selector: 'app-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
	searchData: any[]
	bookingInfo: any
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private title: Title,
	) {
		title.setTitle('Resultados - GU Alquileres')
		this.route.queryParams.subscribe((params) => {
			this.searchData = JSON.parse(params['data']).propsFiltered
			this.bookingInfo = JSON.parse(params['booking'])
		})
		console.log(this.searchData)
	}
}
