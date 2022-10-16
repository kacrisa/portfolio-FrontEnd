import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio_data/portfolio.service';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:any;
  languages:any

  constructor(private datosPortfolio:PortfolioService, private auth:AuthService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.skills=data.skills;
      this.languages=data.languages
    });
  }

  public get isAdmin(): boolean{
    return this.auth.isUserLogIn();
  }
}