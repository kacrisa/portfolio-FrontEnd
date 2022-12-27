import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio_data/portfolio.service';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  jobs:any;

  constructor(private datosPortfolio:PortfolioService, private auth:AuthService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.jobs=data.jobs;
    });
  }

  public get isAdmin(): boolean{
    return this.auth.isUserLogIn();
  }

}