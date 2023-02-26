import { SPersonaService } from './../../servicios/portfolio_data/s-persona.service';
import { Persona } from './../../model/persona.model';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/auth/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  persona: Persona[] = [];

  constructor(private sPersona:SPersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarPersona();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
    
  }

  cargarPersona(): void{
    this.sPersona.lista().subscribe(data => {this.persona = data;} )
    
  }


}

