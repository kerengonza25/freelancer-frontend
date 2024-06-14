import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/User.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/authService.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contrasenia: string = '';
  usuario: string = '';
  error: string = '';

  constructor(private userService: UserService, private router: Router, private authService : AuthServiceService) { }

  ngOnInit() {
  }

  submitForm() {

    this.userService.searchEntities({'filter.email': this.usuario, limit: 1}).subscribe(
      {
        next: data => {
          console.log(data);

          if (data.data.length === 0) {
            this.error = 'Usuario no existe';
            return;
          }

          if (data.data[0].password === this.contrasenia) {
            this.error = '';
            this.authService.login(data.data[0]);
            this.router.navigate(['/']);

          } else {
            this.error = 'Contraseña incorrecta';
          }
        },
        error: error => {
          console.log(error);
          this.error = 'Usuario o contraseña incorrecta';
        }
      }
    );
  }

  redirectToHome() {
    this.error = '';
    this.router.navigate(['/']);
  }

  google() {
    this.error = '';
    this.router.navigate(['/googleLogin']);
  }

  facebook() {
    this.error = '';
    this.router.navigate(['/facebookLogin']);
  }

  git() {
    this.error = '';
    this.router.navigate(['/gitLogin']);
  }

}
