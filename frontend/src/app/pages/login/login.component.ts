import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private service: LoginService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(input: any) {

    // if(input.email==="adtest" && input.password==="abcd"){
    //   console.log("here!")
    //   this.router.navigate(['/advertisers/dashboard']);
    // }

    this.service.getLogin(input.email).subscribe(
      (response: User) => {
        if(input.password===response.password){
          console.log("login success!")
          if(response.type===0){
            this.router.navigate(['/advertisers/dashboard']);
          } else {
            this.router.navigate(['/drivers/dashboard']);
          }
          
        }else{
          input.loginForm.reset();
          alert("Login failed")
        }
      },(error: any) => {
        input.loginForm.reset();
        alert("There's no such user")
      }
    );
  }
}
