import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { NewPropertyComponent } from './components/new-property/new-property.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "property/:id", 
    component: PropertyDetailsComponent, 
    pathMatch: 'full'
  },
  {
    path: "user",
    component: UserComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "properties",
        // component: PropertyListComponent
        component: UserComponent
      },
      {
        path: "properties/new",
        component: NewPropertyComponent
      }
    ]
  },
  {
    path: "register",
    component: RegisterUserComponent,
  },
  {
    path: "login",
    component: LoginComponent
  },
  // {
  //   path: "user/properties",
  //   component: PropertyListComponent,
  //   pathMatch: "full"
  // },
  // {
  //   path: "user/properties/new",
  //   component: NewPropertyComponent,
  //   pathMatch: "full"
  // },
  {
    path: "about-us",
    component: AboutUsComponent,
    pathMatch: 'full'
  },
  {
    path: "contact",
    component: ContactComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
