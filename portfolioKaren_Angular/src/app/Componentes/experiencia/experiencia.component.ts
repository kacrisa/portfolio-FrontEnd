import { Experiencia } from './../../model/experiencia';
import { TokenService } from './../../servicios/auth/token.service';
import { SExperienciaService } from './../../servicios/portfolio_data/s-experiencia.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarExperiencia();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;} )
    
  }

  delete(id?: number){
    if(id != undefined && confirm("Seguro desea elminar esta información?")){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
          window.location.reload();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
