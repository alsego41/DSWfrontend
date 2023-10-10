import { Component, inject, ViewChild, AfterViewInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { UserService } from 'src/app/services/user.service'
import { LoginAuth, LoginBody } from 'src/app/models/login-auth'
import { Router } from '@angular/router'
import { SnackbarService } from 'src/app/services/snackbar.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
	constructor(private formBuilder: FormBuilder) {}
	snackBarService: SnackbarService = inject(SnackbarService)
	loginForm: FormGroup = this.formBuilder.group({
		email: [''],
		password: [''],
	})
	userStatus: Boolean = false
	fetched: Boolean = false
	userService: UserService = inject(UserService)
	body: LoginBody
	router: Router = inject(Router)

	ngAfterViewInit(): void {
		this.snackBarService.setSBTitle('Debes iniciar sesión!')
	}
	onSubmit() {
		this.body = {
			email: this.loginForm.value.email as string,
			password: this.loginForm.value.password as string,
		}
		const _this = this
		this.userService.login(this.body).subscribe({
			next(response: LoginAuth) {
				_this.storeAndProceed(response.token)
				// localStorage.setItem('token', response.token)
				// console.log('Token guardado')
				// _this.userStatus = true
				// _this.fetched = true
				// _this.snackBarService.setSBTitle('Inicio de sesión exitoso!')
				// _this.router.navigateByUrl('/user')
				// _this.router.lastSuccessfulNavigation
				// _this.router.getCurrentNavigation()
			},
			error(err) {
				// _this.userStatus = false
				// _this.fetched = true
				// console.log(err)
				// _this.snackBarService.setSBTitle(
				// 	'Error al iniciar sesión - Intente de nuevo!',
				// )
				_this.handleFailedAccess(err)
			},
		})
	}

	storeAndProceed(token: string) {
		localStorage.setItem('token', token)
		this.snackBarService.setSBTitle('Inicio de sesión exitoso!')
		this.router.navigateByUrl('/user')
		// indagar redirect, usa token viejo
		// this.router.lastSuccessfulNavigation
		// this.router.getCurrentNavigation()
	}

	handleFailedAccess(err?: any) {
		this.snackBarService.setSBTitle(
			'Error al iniciar sesión - Intente de nuevo!',
		)
	}
}
