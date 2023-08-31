import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LoginService {
  USER_ID_SESSION_ATTRIBUTE_NAME = 'authenticatedUserID'

  public email: any;
  public password: any;;

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getLogin(email: string): Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/user/login/${email}`);
  }

  // authenticationService(email: String, password: String) {
  //   return this.http.get(`http://localhost:8080/api/v1/basicauth`,
  //     { headers: { authorization: this.createBasicAuthToken(email, password) } }).pipe(map((res) => {
  //       this.email = email;
  //       this.password = password;
  //       this.registerSuccessfulLogin(email, password);
  //     }));
  // }

  // createBasicAuthToken(email: String, password: String) {
  //   return 'Basic ' + window.btoa(email + ":" + password)
  // }

  // registerSuccessfulLogin(email:any, password:any) {
  //   sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, email)
  // }

  // logout() {
  //   sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  //   this.email = null;
  //   this.password = null;
  // }

  // isUserLoggedIn() {
  //   let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
  //   if (user === null) return false
  //   return true
  // }

  // getLoggedInemail() {
  //   let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
  //   if (user === null) return ''
  //   return user
  // }
}