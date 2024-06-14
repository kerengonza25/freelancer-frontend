import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import { faUser, faLock, faCode, faFile, faDollarSign, faEye, faEyeSlash, faGlobe, faEnvelope, faUsers, faLocation } from '@fortawesome/free-solid-svg-icons';
import { User, UserRole } from '../model/user.entity';
import { ReclutadorData } from '../model/reclutador-data.entity';
import { parse } from '@fortawesome/fontawesome-svg-core';
import { Router } from '@angular/router';
import { UserService } from '../services/User.service';
import { AuthServiceService } from '../services/authService.service';

@Component({
  selector: 'app-register-hirer',
  templateUrl: './register-hirer.component.html',
  styleUrls: ['./register-hirer.component.css']
})
export class RegisterHirerComponent implements OnInit {

  faUser = faUser;
  faEmail = faEnvelope;
  faLock = faLock;
  faCode = faCode;
  faFile = faFile;
  faDollar = faDollarSign;
  faView = faEye;
  faNoview = faEyeSlash;
  faGlobe = faGlobe;
  faUsers = faUsers;
  faLocation = faLocation;
  passwordType = 'password';
  confirmPasswordType = 'password';

  strongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.strongPasswordRegx)]),
    confirmPassword: new FormControl('', [Validators.required, this.createNotMatchValidator()]),
    location: new FormControl(''),
    descripcion: new FormControl('', Validators.required),
    numColaboradores: new FormControl('', [Validators.required, Validators.min(0)]),
    website: new FormControl(''),
  });

  constructor(private userService: UserService, private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  togglePasswordVisibility() {

    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';

  }

  toggleConfirmPasswordVisibility() {

    this.confirmPasswordType = this.confirmPasswordType === 'password' ? 'text' : 'password';

  }

  emailErrorMessages() {

    if (this.form.get('email')?.hasError('required')) {
      return 'Se requiere un correo electrónico';
    } else if (this.form.get('email')?.hasError('email')) {
      return 'El correo electrónico es inválido';
    }

    return this.form.get('email')?.hasError('email') ? 'Email is invalid' : '';

  }

  passwordErrorMessages() {

    if (this.form.get('password')?.hasError('required')) {
      return 'Se requiere una contraseña';
    } else if (this.form.get('password')?.hasError('minlength')) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }
    else if (this.form.get('password')?.hasError('pattern')) {
      if (this.form.get('password')?.value?.match('^(?=.*[A-Z])')) {
        return 'La contraseña debe tener al menos una letra mayúscula';
      }
      else if (this.form.get('password')?.value?.match('^(?=.*[a-z])')) {
        return 'La contraseña debe tener al menos una letra minúscula';
      }
      else if (this.form.get('password')?.value?.match('^(?=.*[0-9])')) {
        return 'La contraseña debe tener al menos un número';
      }
    }
    return this.form.get('password')?.hasError('pattern') ? 'Password must have at least 8 characters, one uppercase, one lowercase and one number' : '';

  }

  confirmPasswordErrorMessages() {

    if (this.form.get('confirmPassword')?.hasError('required')) {
      return 'Se requiere confirmar la contraseña';
    } else if (this.form.get('confirmPassword')?.hasError('notMatch')) {
      return 'Las contraseñas no coinciden';
    }

    return this.form.get('confirmPassword')?.hasError('notMatch') ? 'Passwords do not match' : '';

  }

  nombreErrorMessages() {
    return this.form.get('nombre')?.hasError('required') ? 'Se requiere un nombre' : '';
  }

  createNotMatchValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get("password")?.value ? null : { notMatch: true };
    };
  }

  colabErrorMessages() {
    if (this.form.get('numColaboradores')?.hasError('required')) {
      return 'Se requiere un número';
    }
    else if (this.form.get('numColaboradores')?.hasError('min')) {
      return 'El número de colaboradores no puede ser negativo';
    }
    return '';
  }

  descripcionErrorMessage() {
    return this.form.get('descripcion')?.hasError('required') ? 'Se requiere una descripción' : '';
  }

  register() {

    console.log("register");

    const user = new User();

    var nombre = this.form.get('nombre')?.value;

    var email = this.form.get('email')?.value;

    var password = this.form.get('password')?.value;

    var location = this.form.get('location')?.value;

    var descripcion = this.form.get('descripcion')?.value;

    var numColaboradores = this.form.get('numColaboradores')?.value;

    var website = this.form.get('website')?.value;

    if (nombre === null || nombre === '' || nombre === undefined) {
      return;
    }

    user.firstName = nombre;

    if (email === null || email === '' || email === undefined) {
      return;
    }

    user.email = email;

    if (password === null || password === '' || password === undefined) {
      return;
    }

    user.password = password;

    const recultador = new ReclutadorData();

    if (numColaboradores === null || numColaboradores === '' || numColaboradores === undefined) {
      return;
    }

    recultador.numColaboradores = parseInt(numColaboradores);


    //recultador.location = location;

    if (website !== '' && website !== null && website !== undefined) {
      recultador.web = website;
    }

    user.role = UserRole.RECRUITER;

    //recultador.descripcion = descripcion;

    user.reclutador = recultador;

    user.lastName = 'N/A';

    this.userService.createEntity(user).subscribe(
      (user) => {
        this.authService.login(user);
        this.router.navigate(['/']);
      }
    );


  }


}
