import { Component, Input } from '@angular/core'
import { Property } from 'src/app/models/property'

@Component({
	selector: 'app-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
	constructor() {}
	@Input() Property!: Property
}
