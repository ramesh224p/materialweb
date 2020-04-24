import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from  './user';
import { JwtResponse } from  './jwt-response';

import { tap } from  'rxjs/operators';

import { environment } from '../../../environments/environment';

const tokenName = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isLogged$ = new BehaviorSubject(true);
  private url = `${environment.apiBaseUrl}/v1`;
  private user = { password: 'Luke', email: 'Luke@skywalker.com' }; 

  constructor(private http: HttpClient) {

  }

  public get isLoggedIn(): boolean {
    return this.isLogged$.value;
  }

  public login(data): Observable<any> {
    return this.http.post(`${this.url}/login`, data)
      .pipe(
        map((res: { user: any, token: string }) => {
          this.user = res.user;
          localStorage.setItem(tokenName, res.token);
          console.log(data, this.user);
          console.log("#########",res)
          // only for example
          // localStorage.setItem('password', res.user.password);
          // localStorage.setItem('email', res.user.email);
          this.isLogged$.next(true);
          return res;
        }));
  }

  public logout() {
    return this.http.get(`${this.url}/logout`)
      .pipe(map((data) => {
        localStorage.clear();
        this.user = null;
        this.isLogged$.next(false);
        return of(false);
      }));
  }

  public signup(data) {
    return this.http.post(`${this.url}/signup`, data)
      .pipe(
        map((res: { user: any, token: string }) => {
          this.user = res.user;
          console.log(data);
          localStorage.setItem(tokenName, res.token);
          // only for example
          // localStorage.setItem('password', res.user.password);
          // localStorage.setItem('email', res.user.email);
          this.isLogged$.next(true);
          return res;
        }));
  }

  public get authToken(): string {
    return localStorage.getItem(tokenName);
  }

  public get userData(): Observable<any> {
    // send current user or load data from backend using token
    return this.loadUser();
  }

  private loadUser(): Observable<any> {
    // use request to load user data with token
    // it's fake and useing only for example
    if (localStorage.getItem('password') && localStorage.getItem('email')) {
      this.user = {
        password: localStorage.getItem('password'),
        email: localStorage.getItem('email'),
      };
    }
    return of(this.user);
  }
}
