import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class HelloWorld {
  constructor(public mensagem: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(name) {

    // let basicAuth = this.createBasicAuthenticationHttpHeader();

    // let header = new HttpHeaders({
    //   Authorization: basicAuth
    // });

    return this.http.get<HelloWorld>(`http://localhost:8080/hello-world/${name}`);
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = "user";
  //   let password = "password";
  //   let basicAuth = "Basic " + window.btoa(username + ":" + password);
  //   return basicAuth;
  // }
}