import { EventEmitter, Component, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  })
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();

  @ViewChild('loginForm') loginForm:ElementRef | undefined;

  email: string = "";
  password: string = "";

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({"email": this.email, "password": this.password, "loginForm": this.loginForm});
  }

}