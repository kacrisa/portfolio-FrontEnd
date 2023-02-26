import { Component, Input, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/servicios/portfolio_data/s-proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {

  @Input() proy: Proyectos = null;
  
  constructor(private sProyectos: SProyectosService) { }

  ngOnInit(): void {
    this.proy = {...this.proy};
    
  }

  onUpdate(): void{
    
    this.sProyectos.save(this.proy).subscribe(
      data => {
        window.location.reload();
      }, err =>{
         alert("Error al modificar info sobre proyecto.");
         
      }
    )
  }

}
