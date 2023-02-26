import { SIdiomasService } from './../../servicios/portfolio_data/s-idiomas.service';
import { Component, OnInit } from '@angular/core';
import { Idiomas } from 'src/app/model/idiomas';

@Component({
  selector: 'app-new-idiomas',
  templateUrl: './new-idiomas.component.html',
  styleUrls: ['./new-idiomas.component.css']
})
export class NewIdiomasComponent implements OnInit {

  nombreI : string = '';
	nivelI : string = '';
  porcentajeI : string = '';

  constructor(private sIdiomas: SIdiomasService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const idi = new Idiomas(this.nombreI, this.nivelI, this.porcentajeI);
    this.sIdiomas.save(idi).subscribe(
      data => {
        alert("Idioma añadido");
        window.location.reload();
      }, err => {
        alert("Falló");
      }
    )
  }

}
