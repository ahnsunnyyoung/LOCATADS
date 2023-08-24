import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SelectType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-advertisers-add-advertisement',
  templateUrl: './advertisers-add-advertisement.component.html',
  styleUrls: ['./advertisers-add-advertisement.component.scss']
})
export class AdvertisersAddAdvertisementComponent {

  constructor(private router: Router) { }

  adTypes: SelectType[] = [
    {value: '0', viewValue: 'Product'},
    {value: '1', viewValue: 'Event'},
  ];

  targetAudienceTypes: SelectType[] = [
    {value: '0', viewValue: '0-18'},
    {value: '1', viewValue: '18-24'},
    {value: '2', viewValue: '25-34'},
    {value: '3', viewValue: '35-44'},
    {value: '4', viewValue: '45-54'},
    {value: '5', viewValue: '55-64'},
    {value: '6', viewValue: '65+'},
  ];
  
  weatherTypes: SelectType[] = [
    {value: '0', viewValue: 'Sunny'},
    {value: '1', viewValue: 'Cloudy'},
    {value: '2', viewValue: 'Rainy'},
    {value: '3', viewValue: 'Cloudy'},
  ];
  
  timeTypes: SelectType[] = [
    {value: '0', viewValue: 'Morning'},
    {value: '1', viewValue: 'Day'},
    {value: '2', viewValue: 'Night'},
    {value: '3', viewValue: 'Midnight'},
  ];
  
  serviceTypes: SelectType[] = [
    {value: '0', viewValue: 'Gold Level'},
    {value: '1', viewValue: 'Silver Level'},
    {value: '2', viewValue: 'Bronze Level'},
  ];
  
  selectedAdType = this.adTypes[0].value;
  selectedtargetAudienceType = this.targetAudienceTypes[0].value;
  selectedweatherType = this.weatherTypes[0].value;
  selectedtimeType = this.timeTypes[0].value;
  selectedserviceType = this.serviceTypes[0].value;

  onSubmit() {
    this.router.navigate(['/advertisers/manage']);
  }
}
