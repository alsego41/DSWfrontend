import { Component, inject, ViewChild, AfterViewInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { UserService } from 'src/app/services/user.service'
import { LoginAuth, LoginBody } from 'src/app/models/login-auth'
import { Router } from '@angular/router'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { AuthService } from 'src/app/services/auth.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
	) {}
	snackBarService: SnackbarService = inject(SnackbarService)
	loginForm: FormGroup = this.formBuilder.group({
		email: [''],
		password: [''],
	})
	userStatus: Boolean = false
	fetched: Boolean = false
	userService: UserService = inject(UserService)
	loginInfo: LoginBody
	router: Router = inject(Router)

	ngAfterViewInit(): void {
		this.snackBarService.setSBTitle('Debes iniciar sesión!')
	}
	onSubmit() {
		this.loginInfo = {
			email: this.loginForm.value.email as string,
			password: this.loginForm.value.password as string,
		}
		const _this = this
		this.authService.login(this.loginInfo).subscribe({
			next(data: LoginAuth) {
				_this.authService.setUserData(data)
				// console.log(_this.authService.getUserData())
				_this.storeAndProceed(data.token)
			},
			error(err) {
				_this.handleFailedAccess(err)
			},
		})
		// this.userService.login(this.body).subscribe({
		// 	next(response: LoginAuth) {
		// 		console.log(response)
		// 		_this.storeAndProceed(response.token)
		// 	},
		// 	error(err) {
		// 		_this.handleFailedAccess(err)
		// 	},
		// })
	}

	storeAndProceed(token: string) {
		localStorage.setItem('token', token)
		this.snackBarService.setSBTitle('Inicio de sesión exitoso!')
		this.router.navigateByUrl('/user')
	}

	handleFailedAccess(err?: any) {
		this.snackBarService.setSBTitle(
			'Error al iniciar sesión - Intente de nuevo!',
		)
	}
}
