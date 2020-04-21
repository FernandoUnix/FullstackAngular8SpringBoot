import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMensagem = '';

  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService(this.name).subscribe(
      response => this.handleSucessResponse(response),
      error => this.handleErroResponse(error)
    );
  }

  handleErroResponse(error) {
    this.welcomeMensagem = error.error.message;
  }

  handleSucessResponse(response) {
    this.welcomeMensagem = response.mensagem;
  }
}
