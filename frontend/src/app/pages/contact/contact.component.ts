import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/User';
import { HttpErrorResponse } from '@angular/common/http';

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
  public users: User[] | undefined;

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.UserService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


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

  public onSubmit(addForm: NgForm): void {
    this.UserService.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
      }
    );
  }

  // onSubmit() {
  //   if (this.selectedUserType=='0') {
  //     this.router.navigate(['/advertisers/dashboard']);
  //   } else {
  //     this.router.navigate(['/drivers/dashboard']);

  //   }
  // }
  
}
