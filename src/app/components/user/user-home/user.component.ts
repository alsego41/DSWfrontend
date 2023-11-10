import { AfterViewInit, Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { Property } from 'src/app/models/property'
import { UserService } from 'src/app/services/user.service'
import { PropertyService } from 'src/app/services/property.service'

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	host: { class: 'user-comp' },
})
export class UserComponent implements AfterViewInit {
	constructor(private router: Router) {}
	userService: UserService = inject(UserService)

	propertyService: PropertyService = inject(PropertyService)
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

	logout() {
		this.userService.logout()
		this.router.navigateByUrl('/')
	}
}
