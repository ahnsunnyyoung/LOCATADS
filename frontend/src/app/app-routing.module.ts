import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AdvertisersComponent } from './pages/advertisers/advertisers.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AdvertisersDashboardComponent } from './pages/advertisers-dashboard/advertisers-dashboard.component';
import { AdvertisersManageComponent } from './pages/advertisers-manage/advertisers-manage.component';
import { AdvertisersAddAdvertisementComponent } from './pages/advertisers-add-advertisement/advertisers-add-advertisement.component';
import { DriversDashboardComponent } from './pages/drivers-dashboard/drivers-dashboard.component';
import { DriversManageComponent } from './pages/drivers-manage/drivers-manage.component';
import { DriversAddTaxiComponent } from './pages/drivers-add-taxi/drivers-add-taxi.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},  
  {path : 'about' , component : AboutComponent},  
  {path : 'advertisers' , component : AdvertisersComponent},  
  {path : 'drivers' , component : DriversComponent},  
  {path : 'contact' , component : ContactComponent},  
  {path : 'login' , component : LoginComponent},  
  {path : 'advertisers/dashboard' , component : AdvertisersDashboardComponent},  
  {path : 'advertisers/manage' , component : AdvertisersManageComponent},  
  {path : 'advertisers/add' , component : AdvertisersAddAdvertisementComponent}, 
  {path : 'drivers/dashboard' , component : DriversDashboardComponent},  
  {path : 'drivers/manage' , component : DriversManageComponent},  
  {path : 'drivers/add' , component : DriversAddTaxiComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
