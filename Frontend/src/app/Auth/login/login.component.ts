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

  userError: boolean;
  passwordError: boolean;



  constructor(private authService: AuthenticationService, private router: Router) {

    this.userError = false;
    this.passwordError = false;
  }

  ngOnInit(): void {

    if(this.authService.currentUserValue != null) {
      this.router.navigate(["/inicio"]);
    }



  }



  login() {

    if (this.loginDto.user != '' && this.loginDto.password != '') {

      this.authService.login(this.loginDto)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate(["/inicio"]);
      },
      error => {
        alert("Posibles fallos: \n 1. Usuario o contraseña incorrectos.\n 2. El usuario no ha sido confirmado, vuelva a crearlo.");
      })
    } else {

      if (this.loginDto.user == '') {
        this.userError = true;
      }

      if (this.loginDto.password == '') {
        this.passwordError= true;
      }

    }

  }

    keyDownFunction(event) {
      if (event.keyCode === 13) {
        this.login();
    }
  }
}
