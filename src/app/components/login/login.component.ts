import { Component, inject, ViewChild, AfterViewInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { UserService } from 'src/app/services/user.service'
import { LoginAuth, LoginBody } from 'src/app/models/login-auth'
import { ActivatedRoute, Router } from '@angular/router'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { AuthService } from 'src/app/services/auth.service'
import { Title } from '@angular/platform-browser'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private route: ActivatedRoute,
		private router: Router,
		private title: Title,
	) {
		this.title.setTitle('Login - GU Alquileres')
	}
	snackBarService: SnackbarService = inject(SnackbarService)
	loginForm: FormGroup = this.formBuilder.group({
		email: [''],
		password: [''],
	})
	userStatus: Boolean = false
	fetched: Boolean = false
	userService: UserService = inject(UserService)
	loginInfo: LoginBody

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
				_this.storeAndProceed(data.token)
			},
			error(err) {
				_this.handleFailedAccess(err)
			},
		})
	}

	storeAndProceed(token: string) {
		localStorage.setItem('token', token)
		this.snackBarService.setSBTitle('Inicio de sesión exitoso!')
		const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/user'
		this.router.navigateByUrl(returnUrl)
	}

	handleFailedAccess(err?: any) {
		this.snackBarService.setSBTitle(
			'Error al iniciar sesión - Intente de nuevo!',
		)
	}
}
