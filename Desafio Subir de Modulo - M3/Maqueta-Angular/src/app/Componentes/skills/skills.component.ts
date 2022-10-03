import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio_data/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:any;
  languages:any

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.skills=data.skills;
      this.languages=data.languages
    });
  }

}