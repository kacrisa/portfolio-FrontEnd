import { Proyectos } from './../../model/proyectos';
import { Component, Input, OnInit } from '@angular/core';
import { SProyectosService } from 'src/app/servicios/portfolio_data/s-proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {


  nombreP : string = '';
	fechaP : string = '';
	descripcionP : string = '';
	imagenP : string = '';

  constructor(private sProyectos: SProyectosService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyectos(this.nombreP, this.fechaP, this.descripcionP, this.imagenP);
    this.sProyectos.save(proy).subscribe(
      data => {
        alert("Proyecto añadido");
        window.location.reload();
      }, err => {
        alert("Falló");
      }
    )
  }
  

}
