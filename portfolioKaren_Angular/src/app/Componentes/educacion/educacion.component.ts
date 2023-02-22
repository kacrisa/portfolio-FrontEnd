import { SEducacionService } from './../../servicios/portfolio_data/s-educacion.service';
import { Component, OnInit, Type } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio_data/portfolio.service';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { Educacion } from 'src/app/model/educacion';
import { TokenService } from 'src/app/servicios/auth/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];

  constructor(private sEducacion: SEducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarEducacion();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.sEducacion.lista().subscribe(data => {this.edu = data;} )
  
  }

  delete(id?: number){
    if(id != undefined && confirm("Seguro desea elminar esta información?")){
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
          window.location.reload();
        }, err => {
          alert("No se pudo borrar la info de educacion.");
        }
      )
    }
  }

}
