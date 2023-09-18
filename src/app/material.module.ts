import { NgModule } from '@angular/core'
import { MatNativeDateModule } from '@angular/material/core'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'

import { MatRadioModule } from '@angular/material/radio'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatChipsModule } from '@angular/material/chips'
import { MatSnackBarModule } from '@angular/material/snack-bar'

const Material: any[] = [
	MatFormFieldModule,
	MatNativeDateModule,
	MatInputModule,
	MatSelectModule,
	MatRadioModule,
	MatDatepickerModule,
	MatSlideToggleModule,
	MatAutocompleteModule,
	MatIconModule,
	MatCardModule,
	MatButtonModule,
	MatChipsModule,
	MatSnackBarModule,
]

@NgModule({
	imports: [Material],
	exports: [Material],
})
export class MaterialModule {}
