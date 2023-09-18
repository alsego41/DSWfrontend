import { Component, inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/user'
import { Router } from '@angular/router'

@Component({
	selector: 'app-register-user',
	templateUrl: './register-user.component.html',
	styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent {
	userService: UserService = inject(UserService)
	maxDate: Date
	newUser: User
	router: Router = inject(Router)
	constructor(private formBuilder: FormBuilder) {
		this.maxDate = new Date()
	}
	registerForm = this.formBuilder.group({
		firstName: [''],
		lastName: [''],
		dni: [''],
		email: [''],
		password: [''],
		address: [''],
		dob: [''],
		gender: [''],
	})
	btnStatus: String = ''
	// pasar a service
	onSubmit() {
		this.newUser = {
			_id: '',
			firstName: this.registerForm.value.firstName || '',
			lastName: this.registerForm.value.lastName || '',
			dni: Number(this.registerForm.value.dni),
			email: this.registerForm.value.email || '',
			address: this.registerForm.value.address || '',
			password: this.registerForm.value.password || '',
			dob: new Date(this.registerForm.value.dob || Date.now()),
			gender: this.registerForm.value.gender || '',
			bankAccount: '',
			properties: [],
		}
		const _this = this
		this.btnStatus = 'disabled'
		this.userService.register(this.newUser).subscribe({
			next(value) {
				// Display snackbar
				_this.router.navigateByUrl('/login')
			},
			error(err) {
				_this.btnStatus = ''
			},
		})
		// console.log('form data is ', this.registerForm.value)
		// fetch(this.newUserUrl, {
		// 	method: 'POST',
		// 	body: JSON.stringify(this.registerForm.value),
		// 	headers: { 'Content-type': 'application/json; charset=UTF-8' },
		// })
		// 	.then((res) => res.json())
		// 	.then((json) => console.log(json))
		// 	.catch((err) => console.log(err))
	}
}
