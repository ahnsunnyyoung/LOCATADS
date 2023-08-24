import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

interface UserType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private router: Router) { }

  userTypes: UserType[] = [
    {value: '0', viewValue: 'Advertiser'},
    {value: '1', viewValue: 'Driver'},
  ];
  selectedUserType = this.userTypes[0].value;

  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    if (this.selectedUserType=='0') {
      this.router.navigate(['/advertisers/dashboard']);
    } else {
      this.router.navigate(['/drivers/dashboard']);

    }
  }
  
}
