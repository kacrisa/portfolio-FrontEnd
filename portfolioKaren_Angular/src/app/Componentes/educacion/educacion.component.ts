import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio_data/portfolio.service';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  education:any;

  constructor(private datosPortfolio:PortfolioService, private auth:AuthService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.education=data.education;
    });
  }

  public get isAdmin(): boolean{
    return this.auth.isUserLogIn();
  }

}