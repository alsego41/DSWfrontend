import { Component, Input, OnInit } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { SnackbarService } from 'src/app/services/snackbar.service'

@Component({
	selector: 'app-snackbar',
	templateUrl: './snackbar.component.html',
	styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
	constructor(
		private _snackBar: MatSnackBar,
		private snackBarService: SnackbarService,
	) {}
	@Input() title: string

	ngOnInit(): void {
		this.snackBarService.titleSource$.subscribe((title) => {
			this.openSnackBar(title, undefined, [])
		})
	}

	openSnackBar(
		message: string,
		action: string = 'Cerrar',
		classesNames: string[],
	) {
		this._snackBar.open(message, action, {
			duration: 3000,
			panelClass: classesNames,
		})
	}
}
