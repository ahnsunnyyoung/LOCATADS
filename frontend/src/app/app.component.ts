import { Component, OnInit } from '@angular/core';
import { User } from './model/User';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public users: User[] | undefined;
  public editUser: User | undefined;
  public deleteUser: User | undefined;

  constructor(private UserService: UserService){}

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



  public onUpdateEmloyee(User: User): void {
    this.UserService.updateUser(User).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEmloyee(UserId: number): void {
    this.UserService.deleteUser(UserId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchUsers(key: string): void {
    // console.log(key);
    // const results: User[] = [];
    // for (const User of this.users) {
    //   if (User.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
    //   || User.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
    //   || User.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
    //   || User.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
    //     results.push(User);
    //   }
    // }
    // this.users = results;
    // if (results.length === 0 || !key) {
    //   this.getUsers();
    // }
  }

  public onOpenModal(User: User, mode: string): void {
    // const container = document.getElementById('main-container');
    // const button = document.createElement('button');
    // button.type = 'button';
    // button.style.display = 'none';
    // button.setAttribute('data-toggle', 'modal');
    // if (mode === 'add') {
    //   button.setAttribute('data-target', '#addUserModal');
    // }
    // if (mode === 'edit') {
    //   this.editUser = User;
    //   button.setAttribute('data-target', '#updateUserModal');
    // }
    // if (mode === 'delete') {
    //   this.deleteUser = User;
    //   button.setAttribute('data-target', '#deleteUserModal');
    // }
    // container.appendChild(button);
    // button.click();
  }



}
