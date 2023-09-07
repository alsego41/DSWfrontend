import { AfterViewInit, Component, inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Property } from 'src/app/models/property'
import { UserService } from 'src/app/services/user.service'

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	host: { class: 'user-comp' },
})
export class UserComponent implements AfterViewInit {
	constructor(private formBuilder: FormBuilder) {}
	userService: UserService = inject(UserService)
	properties: Property[] = []
	profileForm = this.formBuilder.group({
		firstName: [''],
		lastName: [''],
		DNI: [''],
		mail: [''],
		password: [''],
		address: [''],
		dob: [''],
		gender: [''],
	})
	ngAfterViewInit(): void {
		console.log('call to props')
		const _this = this
		this.userService
			.getAllProperties(localStorage.getItem('token') || '')
			.subscribe({
				next(value) {
					_this.properties = value.properties
					console.log(_this.properties)
				},
				error(err) {
					console.log(err)
				},
			})
	}

	onSubmit() {
		console.log('form data is ', this.profileForm.value)
	}
}
