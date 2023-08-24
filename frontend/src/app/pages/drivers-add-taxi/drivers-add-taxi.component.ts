import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SelectType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-drivers-add-taxi',
  templateUrl: './drivers-add-taxi.component.html',
  styleUrls: ['./drivers-add-taxi.component.scss']
})
export class DriversAddTaxiComponent {

  constructor(private router: Router) { }

  taxiTypes: SelectType[] = [
    {value: '0', viewValue: 'Small Car'},
    {value: '1', viewValue: 'Medium Car'},
    {value: '2', viewValue: 'Large Car'},
  ];

  serviceTypes: SelectType[] = [
    {value: '0', viewValue: 'Gold Level'},
    {value: '1', viewValue: 'Silver Level'},
    {value: '2', viewValue: 'Bronze Level'},
  ];

  selectedTaxiType = this.taxiTypes[0].value;
  selectedserviceType = this.serviceTypes[0].value;

  onSubmit() {
    this.router.navigate(['/drivers/manage']);
  }

}
