import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserInfo } from 'src/app/_models/auth/user-info';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private _user: BehaviorSubject<UserInfo | undefined> = new BehaviorSubject<UserInfo | undefined >(undefined);
  public user: Observable<UserInfo | undefined> = this._user.asObservable();
  constructor(
    private http: HttpClient
  ) {
    this._user.next(this.getUser());
  }

  getUser(): UserInfo | undefined {
    const token = this.getToken();
    if (token) {
      const user = this.parseJwt(token);
      return user;
    }
    return undefined;

  }
  getToken(): string {
    const token = localStorage.getItem('JWT_TOKEN');
    // return token;
    return 'fake token'
  }

  signIn(email: string, pwd: string): Observable<UserInfo> {
    return this.http.post<UserInfo>('http://localhost:3000/auth/signin', {
      email: email,
      password: pwd
    }).pipe(
      tap((res: UserInfo) => {
          this.setJwtToken(res.jwt.token);
          this._user.next(res);
      }));
  }

  signUp(info: UserInfo): Observable<any> {
    return this.http.post('http://localhost:3000/auth/signup', info);
  }

  setJwtToken(token: string) {
    localStorage.setItem('JWT_TOKEN', token);
  }

  deleteJwtToken() {
    localStorage.removeItem('JWT_TOKEN');
  }
  parseJwt(token: string): UserInfo | undefined {
    // const base64Url = token.split('.')[1];
    // const base64 = base64Url.replace('-', '+').replace('_', '/');
    // return JSON.parse(window.atob(base64));
    return {
      email : 'antoinedespres13@gmail.com',
      phone : '09 79 79 79 79' ,
      password : 'pwdadmin',
      firstName : 'despres',
      lastName : 'antoine',
      pseudo : 'antwaneuh',
      section : ['design'],
      jwt : {
        token : 'fake token'
      }
    }
    return undefined
  }
}
