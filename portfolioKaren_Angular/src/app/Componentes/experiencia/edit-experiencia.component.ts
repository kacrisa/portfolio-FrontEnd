import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/portfolio_data/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  
  @Input() expLab: Experiencia = null;
  
  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.expLab = {...this.expLab};
    
  }

  onUpdate(): void{
    
    this.sExperiencia.save(this.expLab).subscribe(
      data => {
        window.location.reload();
      }, err =>{
         alert("Error al modificar experiencia");
        
      }
    )
  }

}