import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './pages/about/about.component';
import { AdvertisersComponent } from './pages//advertisers/advertisers.component';
import { DriversComponent } from './pages//drivers/drivers.component';
import { ContactComponent } from './pages//contact/contact.component';
import { AdvertisersDashboardComponent } from './pages/advertisers-dashboard/advertisers-dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgFor} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideButtonsComponent } from './components/side-buttons/side-buttons.component';
import { AdvertisersManageComponent } from './pages/advertisers-manage/advertisers-manage.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AdvertisersAddAdvertisementComponent } from './pages/advertisers-add-advertisement/advertisers-add-advertisement.component';
import { DriversDashboardComponent } from './pages/drivers-dashboard/drivers-dashboard.component';
import { DriversManageComponent } from './pages/drivers-manage/drivers-manage.component';
import { DriversAddTaxiComponent } from './pages/drivers-add-taxi/drivers-add-taxi.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { ModalModule } from './components/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    AdvertisersComponent,
    DriversComponent,
    AdvertisersDashboardComponent,
    ContactComponent,
    SideNavComponent,
    SideButtonsComponent,
    AdvertisersManageComponent,
    AdvertisersAddAdvertisementComponent,
    DriversDashboardComponent,
    DriversManageComponent,
    DriversAddTaxiComponent,
    LoginFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    MatButtonModule,
    MatSidenavModule,
    CanvasJSAngularChartsModule,
    HttpClientModule,
    ModalModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
