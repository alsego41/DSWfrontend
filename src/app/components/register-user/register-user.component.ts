import { Component, inject } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/user'
import { Router } from '@angular/router'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { Title } from '@angular/platform-browser'

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
	constructor(
		private formBuilder: FormBuilder,
		private snackBarService: SnackbarService,
		private title: Title,
	) {
		this.title.setTitle('Registro - GU Alquileres')
		this.maxDate = new Date()
	}
	registerForm = this.formBuilder.group({
		firstName: ['', Validators.required],
		lastName: ['', Validators.required],
		dni: ['', Validators.required, Validators.min(0)],
		email: ['', Validators.required],
		password: ['', Validators.required],
		address: ['', Validators.required],
		dob: ['', Validators.required],
		gender: ['', Validators.required],
	})
	submittedState: boolean = false
	onSubmit() {
		this.submittedState = true
		if (this.registerForm.valid) {
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
			this.userService.register(this.newUser).subscribe({
				next(value) {
					_this.snackBarService.setSBTitle(`Usuario creado con éxito`)
					_this.router.navigate(['/user'])
				},
				error(err) {
					_this.snackBarService.setSBTitle(
						`Error al crear usuario - Email ya registrado`,
					)
					_this.submittedState = false
				},
			})
		} else {
			this.snackBarService.setSBTitle(
				`Error al crear usuario - Falta información`,
			)
			this.submittedState = false
		}
	}
}
