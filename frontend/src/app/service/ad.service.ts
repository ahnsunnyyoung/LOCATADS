import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ad } from '../model/Ad';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AdService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>(`${this.apiServerUrl}/ad/all`);
  }

  public getUserAds(userId: number): Observable<Ad[]> {
    return this.http.get<Ad[]>(`${this.apiServerUrl}/ad/findByUser/${userId}`);
  }

  public addAd(Ad: Ad, userId: number): Observable<Ad> {
    console.log(`${this.apiServerUrl}/ad/add`)
    return this.http.post<Ad>(`${this.apiServerUrl}/ad/add/${userId}`, Ad);
  }

  public updateAd(Ad: Ad, userId: number): Observable<Ad> {
    return this.http.put<Ad>(`${this.apiServerUrl}/ad/update/${userId}`, Ad);
  }

  public deleteAd(adId: number, userId: number): Observable<Ad> {
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('adId', adId);
    params = params.append('userId', userId)

    return this.http.delete<Ad>(`${this.apiServerUrl}/ad/delete`, { params: params });
  }
}