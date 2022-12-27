
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio_data/portfolio.service';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  sobreMi:any;

  constructor(private datosPortfolio:PortfolioService, private auth:AuthService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.sobreMi=data.profile;
    });
  }

  public get isAdmin(): boolean{
    return this.auth.isUserLogIn();
  }

}

