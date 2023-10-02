import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class SnackbarService {
	private titleSource = new Subject<string>()
	titleSource$ = this.titleSource.asObservable()

	setSBTitle(title: string): void {
		this.titleSource.next(title)
	}
}
