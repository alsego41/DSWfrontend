import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { registerLocaleData } from '@angular/common'
import localeEsAr from '@angular/common/locales/es-AR'
registerLocaleData(localeEsAr)
import { AppRoutingModule } from './app-routing.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { SearchComponent } from './components/search/search.component'
import { CardsComponent } from './components/cards/cards.component'
import { FooterComponent } from './components/footer/footer.component'
import { FilterComponent } from './components/filter/filter.component'
import { PropertyDetailsComponent } from './components/property/property-details/property-details.component'
import { HomeComponent } from './components/home/home.component'
import { UserComponent } from './components/user/user-home/user.component'
import { AboutUsComponent } from './components/about-us/about-us.component'
import { ContactComponent } from './components/contact/contact.component'
import { RegisterUserComponent } from './components/register-user/register-user.component'
import { LoginComponent } from './components/login/login.component'
import { NewPropertyComponent } from './components/property/property-new/new-property.component'
import { TrendingCitiesComponent } from './components/trending-cities/trending-cities.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

import { MaterialModule } from './material.module'
import { PipesModule } from './pipes.module'
import { SnackbarComponent } from './components/snackbar/snackbar.component'

import { AutocompleteComponent } from './components/autocomplete/autocomplete.component'

import { HowToBeAHostComponent } from './components/footer/how-to-be-a-host/how-to-be-a-host.component'
import { UserProfileComponent } from './components/user/user-profile/user-profile.component'
import { PropertyBookingComponent } from './components/property/property-booking/property-booking.component'
import { PropertyOwnerlistComponent } from './components/property/property-ownerlist/property-ownerlist.component'
import { BookingOwnerlistComponent } from './components/booking/booking-ownerlist/booking-ownerlist.component'
import { BookingUserlistComponent } from './components/booking/booking-userlist/booking-userlist.component'
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core'

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SearchComponent,
		CardsComponent,
		FooterComponent,
		FilterComponent,
		PropertyDetailsComponent,
		HomeComponent,
		UserComponent,
		AboutUsComponent,
		ContactComponent,
		RegisterUserComponent,
		LoginComponent,
		NewPropertyComponent,
		TrendingCitiesComponent,
		SnackbarComponent,

		AutocompleteComponent,

		HowToBeAHostComponent,
		UserProfileComponent,
		PropertyBookingComponent,
		PropertyOwnerlistComponent,
		BookingOwnerlistComponent,
		BookingUserlistComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		HttpClientModule,
		PipesModule,
	],
	providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-AR' }],
	bootstrap: [AppComponent],
})
export class AppModule {}
