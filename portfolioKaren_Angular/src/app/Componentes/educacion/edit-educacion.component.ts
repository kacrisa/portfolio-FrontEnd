import { SEducacionService } from './../../servicios/portfolio_data/s-educacion.service';
import { Educacion } from './../../model/educacion';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  @Input() edu: Educacion = null;
  
  constructor(private sEducacion: SEducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.edu = {...this.edu};
    
  }

  onUpdate(): void{
    
    this.sEducacion.save(this.edu).subscribe(
      data => {
        window.location.reload();
      }, err =>{
         alert("Error al modificar info sobre educación.");
         
      }
    )
  }
}
