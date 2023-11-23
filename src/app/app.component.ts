import { Component } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { SnackbarService } from './services/snackbar.service'

@Component({
	selector: 'app-root',

	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'GU Alquileres'
	constructor(
		private snackBar: MatSnackBar,
		private snackBarService: SnackbarService,
	) {
		this.snackBarService.titleSource$.subscribe((msg) => {
			this.snackBar.open(msg, 'Cerrar', { duration: 4000 })
		})
	}
}
