import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = "user";
    // let password = "password";
    //  let basicAuth = "Basic " + window.btoa(username + ":" + password);

    let basicAuth = this.basicAuthenticationService.getUserAuthenticatedToken();
    let username = this.basicAuthenticationService.getUserAuthenticated();

    if (basicAuth && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuth
        }
      });
    }

    return next.handle(request);
  }
}
