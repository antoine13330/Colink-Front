import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { JWT_TOKEN_RESPONSE } from 'src/app/_models/auth/jwt';
import { UserInfo } from 'src/app/_models/auth/user-info';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient
  ) { }


  getToken(): string {
    const token = localStorage.getItem('JWT_TOKEN');
    // return token;
    return 'fake token'
  }

  signIn(email: string, pwd: string): Observable<JWT_TOKEN_RESPONSE> {
    return this.http.post<JWT_TOKEN_RESPONSE>('http://localhost:3000/auth/signin', {
      email: email,
      password: pwd
    }).pipe(
      tap((res: JWT_TOKEN_RESPONSE) => {
          this.setJwtToken(res.token);
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
}
