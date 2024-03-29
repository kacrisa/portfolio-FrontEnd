import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio_data/portfolio.service';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  projects:any;

  constructor(private datosPortfolio:PortfolioService, private auth:AuthService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.projects=data.projects;
    });
  }

  public get isAdmin(): boolean{
    return this.auth.isUserLogIn();
  }

}