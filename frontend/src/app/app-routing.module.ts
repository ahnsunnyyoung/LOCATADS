import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdvertisersComponent } from './advertisers/advertisers.component';
import { DriversComponent } from './drivers/drivers.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},  
  {path : 'about' , component : AboutComponent},  
  {path : 'advertisers' , component : AdvertisersComponent},  
  {path : 'drivers' , component : DriversComponent},  
  {path : 'contact' , component : ContactComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
