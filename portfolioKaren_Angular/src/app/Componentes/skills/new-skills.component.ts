import { Component, OnInit } from '@angular/core';
import { SHabilidadesService } from 'src/app/servicios/portfolio_data/s-habilidades.service';
import { Habilidades } from 'src/app/model/habilidades';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {

	nombreH : string = '';
	porcentajeH : string = '';
  colorH : string = '';

  constructor(private sHabilidades: SHabilidadesService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hab = new Habilidades(this.nombreH, this.porcentajeH, this.colorH);
    this.sHabilidades.save(hab).subscribe(
      data => {
        alert("Habilidade añadida");
        window.location.reload();
      }, err => {
        alert("Falló");
      }
    )
  }

}
