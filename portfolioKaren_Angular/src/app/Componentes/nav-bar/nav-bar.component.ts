import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']

})
export class NavBarComponent implements OnInit {
  
  constructor(private auth:AuthService) {
    
  }

  ngOnInit(): void {
  }

  public get isAdmin(): boolean{
    return this.auth.isUserLogIn();
  }

  public btnLogout(): void{
    this.auth.logout();
  }

}
