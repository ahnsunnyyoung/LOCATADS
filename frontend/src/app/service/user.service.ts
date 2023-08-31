import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }

  public addUser(User: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/add`, User);
  }

  public updateUser(User: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/user/update`, User);
  }

  public deleteUser(UserId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${UserId}`);
  }

}