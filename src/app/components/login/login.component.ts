import { Component, inject } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { UserService } from 'src/app/services/user.service'
import { LoginAuth, LoginBody } from 'src/app/models/login-auth'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	constructor(private formBuilder: FormBuilder) {}
	loginForm: FormGroup = this.formBuilder.group({
		email: [''],
		password: [''],
	})
	userStatus: Boolean = false
	fetched: Boolean = false
	userService: UserService = inject(UserService)
	body: LoginBody

	onSubmit() {
		this.body = {
			email: this.loginForm.value.email as string,
			password: this.loginForm.value.password as string,
		}
		const _this = this
		this.userService.login(this.body).subscribe({
			next(response: LoginAuth) {
				localStorage.setItem('token', response.token)
				console.log('Token guardado')
				_this.userStatus = true
				_this.fetched = true
			},
			error(err) {
				_this.userStatus = false
				_this.fetched = true
				console.log(err)
			},
		})
	}
}
