import { SPersonaService } from './../../servicios/portfolio_data/s-persona.service';

import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  @Input() expPer: Persona = null;

  constructor(private sPersona: SPersonaService) { }

  ngOnInit(): void {
    this.expPer = {...this.expPer};
  }

  onUpdate(): void{
    
    this.sPersona.save(this.expPer).subscribe(
      data => {
        window.location.reload();
      }, err =>{
         alert("Error al modificar persona");
        
      }
    )

  }

}
