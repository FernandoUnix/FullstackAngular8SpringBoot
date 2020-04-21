import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { API_URL } from '../app.constant';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticarUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  getUserAuthenticated() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getUserAuthenticatedToken() {
    if (this.getUserAuthenticated())
      return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }


  executeJWTBasicAuthenticationService(username, password) {

    return this.http.post<any>(`${API_URL}/authenticate`,{
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);

          return data;
        }
      )
    );
  }

  executeBasicAuthenticationService(username, password) {

    let basicAuth = "Basic " + window.btoa(username + ":" + password);

    let header = new HttpHeaders({
      Authorization: basicAuth
    });

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, { headers: header }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuth);

          return data;
        }
      )
    );
  }
}

export class AuthenticationBean {
  constructor(public mensagem: string) {
  }
}