import { SIdiomasService } from './../../servicios/portfolio_data/s-idiomas.service';
import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { Idiomas } from 'src/app/model/idiomas';
import { TokenService } from 'src/app/servicios/auth/token.service';
import { SHabilidadesService } from 'src/app/servicios/portfolio_data/s-habilidades.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  hab: Habilidades[] = [];
  idi: Idiomas[] = [];

  constructor(private sHabilidades: SHabilidadesService, private sIdiomas: SIdiomasService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarHabilidades();
    this.cargarIdiomas();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  cargarHabilidades(): void{
    this.sHabilidades.lista().subscribe(data => {this.hab = data;} )
    
  }

  cargarIdiomas(): void{
    this.sIdiomas.lista().subscribe(data => {this.idi = data;} )
    
  }

  delete(id?: number){
    if(id != undefined && confirm("Seguro desea eliminar esta información?")){
      this.sHabilidades.delete(id).subscribe(
        data => {
          this.cargarHabilidades();
          window.location.reload();
        }, err => {
          alert("No se pudo borrar la Habilidad");
        }
      )
    }
  }

  deleteIdi(id?: number){
    if(id != undefined && confirm("Seguro desea eliminar esta información?")){
      this.sIdiomas.delete(id).subscribe(
        data => {
          this.cargarIdiomas();
          window.location.reload();
        }, err => {
          alert("No se pudo borrar el idioma");
        }
      )
    }
  }
}