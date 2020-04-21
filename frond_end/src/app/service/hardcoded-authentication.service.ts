import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authentication(username, password) {
    if (username === "fernando" && password === "123") {
      sessionStorage.setItem("authenticarUser", username);
      return true;
    }

    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticarUser");
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("authenticarUser");
  }
}
