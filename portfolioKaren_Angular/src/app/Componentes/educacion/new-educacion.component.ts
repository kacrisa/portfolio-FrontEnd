import { Educacion } from './../../model/educacion';
import { SEducacionService } from './../../servicios/portfolio_data/s-educacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  escuelaE : string = '';
	tituloE : string = '';
	dataE : string = '';
	descripcionE : string = '';
	imagenE : string = '';

  constructor(private sEducacion: SEducacionService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.escuelaE, this.tituloE, this.dataE, this.descripcionE, this.imagenE);
    this.sEducacion.save(edu).subscribe(
      data => {
        alert("Educacion añadida");
        window.location.reload();
      }, err => {
        alert("Falló");
      }
    )
  }

}
