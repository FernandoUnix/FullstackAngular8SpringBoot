import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'fernando';
  password = '';
  erroMensage = "credendial invalidas";
  invalidLogin = false;


  constructor(private router: Router,
    private basicAuthenticationService: BasicAuthenticationService,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardcodedAuthenticationService.authentication(this.username, this.password)) {
      this.invalidLogin = false;

      this.router.navigate(['welcome', this.username]);

    } else {
      this.invalidLogin = true;
    }
  }


  handleJWTBasicAuthLogin() {
    this.basicAuthenticationService.executeJWTBasicAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error);
        this.invalidLogin = true;

      }
    );
  }


  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeBasicAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error);
        this.invalidLogin = true;

      }
    );
  }
}
