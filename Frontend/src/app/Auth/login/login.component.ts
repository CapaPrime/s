import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginDTO } from 'app/DTOs/UsuarioLogin';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginDto: LoginDTO = {
    user: '',
    password: ''
  };



  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

    if(this.authService.currentUserValue != null) {
      this.router.navigate(["/inicio"]);
    }



  }



  login() {
    this.authService.login(this.loginDto)
    .pipe(first())
    .subscribe(data => {
      this.router.navigate(["/inicio"]);
    },
    error => {
      alert("Posibles fallos: \n 1. Usuario o contraseña incorrectos.\n 2. El usuario no ha sido confirmado, vuelva a crearlo.");
    })

  }

    keyDownFunction(event) {
      if (event.keyCode === 13) {
        this.login();
    }
  }
}
