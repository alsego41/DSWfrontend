import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "property", 
    component: PropertyDetailsComponent, 
    pathMatch: 'full'
  },
{
  path: "user",
  component: UserComponent,
  pathMatch: 'full'
},
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
