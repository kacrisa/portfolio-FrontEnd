import { AuthService } from 'src/app/servicios/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  formLogin:FormGroup = new FormGroup({});

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email

        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]
        )
      }
    )
  }

  sendLogin(): void {
    const {email, password} = this.formLogin.value
    this.authService.loginSimple(email, password)
  }



}
