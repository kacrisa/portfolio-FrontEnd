import { Component, Input, OnInit } from '@angular/core';
import { Idiomas } from 'src/app/model/idiomas';
import { SIdiomasService } from 'src/app/servicios/portfolio_data/s-idiomas.service';

@Component({
  selector: 'app-edit-idiomas',
  templateUrl: './edit-idiomas.component.html',
  styleUrls: ['./edit-idiomas.component.css']
})
export class EditIdiomasComponent implements OnInit {

  @Input() idi: Idiomas = null;
  
  constructor(private sIdiomas: SIdiomasService) { }

  ngOnInit(): void {
    this.idi = {...this.idi};
    
  }

  onUpdate(): void{
    
    this.sIdiomas.save(this.idi).subscribe(
      data => {
        window.location.reload();
      }, err =>{
         alert("Error al modificar idioma");
        
      }
    )
  }


}
