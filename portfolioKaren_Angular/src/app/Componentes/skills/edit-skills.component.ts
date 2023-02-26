import { Component, Input, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { SHabilidadesService } from 'src/app/servicios/portfolio_data/s-habilidades.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  @Input() habi: Habilidades = null;
  
  constructor(private sHabilidades: SHabilidadesService) { }

  ngOnInit(): void {
    this.habi = {...this.habi};
    
  }

  onUpdate(): void{
    
    this.sHabilidades.save(this.habi).subscribe(
      data => {
        window.location.reload();
      }, err =>{
         alert("Error al modificar habilidad");
        
      }
    )
  }

}