import { Proyectos } from './../../model/proyectos';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { SProyectosService } from 'src/app/servicios/portfolio_data/s-proyectos.service';
import { TokenService } from 'src/app/servicios/auth/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proy: Proyectos[] = [];

  constructor(private sProyectos: SProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarProyectos();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  cargarProyectos(): void{
    this.sProyectos.lista().subscribe(data => {this.proy = data;} )
  
  }

  delete(id?: number){
    if(id != undefined && confirm("Seguro desea eliminar este proyecto?")){
      this.sProyectos.delete(id).subscribe(
        data => {
          this.cargarProyectos();
          window.location.reload();
        }, err => {
          alert("No se pudo borrar el proyecto.");
        }
      )
    }
  }


}