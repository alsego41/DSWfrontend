import { AfterViewInit, Component, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Property } from 'src/app/models/property'
import { UserService } from 'src/app/services/user.service'
import { PropertyService } from 'src/app/services/property.service'
import { Observable } from 'rxjs'
import { Title } from '@angular/platform-browser'

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	host: { class: 'user-comp' },
})
export class UserComponent implements AfterViewInit {
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private title: Title,
	) {
		title.setTitle('Menú Usuario - GU Alquileres')
	}
	userService: UserService = inject(UserService)
	userData: any | undefined
	propertyService: PropertyService = inject(PropertyService)
	properties: Property[] = []
	userType: string

	ngAfterViewInit(): void {
		this.userService.getInfo().subscribe((data) => {
			this.userData = data.payload
			this.userType = data.payload.userType?.nameType || ''
			this.title.setTitle(
				`${
					data.payload.firstName + ' ' + data.payload.lastName
				} - GU Alquileres`,
			)
		})
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

	logout() {
		this.userService.logout()
		this.router.navigateByUrl('/')
	}
}
