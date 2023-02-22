import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/portfolio_data/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  
  posicionE : string = '';
	empresaE : string = '';
	dataE : string = '';
	descripcionE : string = '';
	imagenE : string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.posicionE, this.empresaE, this.dataE, this.descripcionE, this.imagenE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        window.location.reload();
      }, err => {
        alert("Falló");
      }
    )
  }

}