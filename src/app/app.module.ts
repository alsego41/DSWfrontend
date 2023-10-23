import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { SearchComponent } from './components/search/search.component'
import { CardsComponent } from './components/cards/cards.component'
import { FooterComponent } from './components/footer/footer.component'
import { FilterComponent } from './components/filter/filter.component'
import { PropertyDetailsComponent } from './components/property-details/property-details.component'
import { HomeComponent } from './components/home/home.component'
import { UserComponent } from './components/user/user.component'
import { AboutUsComponent } from './components/about-us/about-us.component'
import { ContactComponent } from './components/contact/contact.component'
import { RegisterUserComponent } from './components/register-user/register-user.component'
import { LoginComponent } from './components/login/login.component'
import { NewPropertyComponent } from './components/new-property/new-property.component'
import { TrendingCitiesComponent } from './components/trending-cities/trending-cities.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

import { MaterialModule } from './material.module'
import { PipesModule } from './pipes.module';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

import { AutocompleteComponent } from './components/autocomplete/autocomplete.component'

import { HowToBeAHostComponent } from './components/footer/how-to-be-a-host/how-to-be-a-host.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PropertyBookingComponent } from './components/property-booking/property-booking.component'


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
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
