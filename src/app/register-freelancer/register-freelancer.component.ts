import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { faCode, faDollarSign, faEnvelope, faEye, faEyeSlash, faFile, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/User.service';
import { AuthServiceService } from '../services/authService.service';
import { Router } from '@angular/router';
import { User, UserRole } from '../model/user.entity';
import { FreelancerData } from '../model/freelancer-data.entity';

@Component({
  selector: 'app-register-freelancer',
  templateUrl: './register-freelancer.component.html',
  styleUrls: ['./register-freelancer.component.css']
})
export class RegisterFreelancerComponent implements OnInit {

  faUser = faUser;
  faEmail = faEnvelope;
  faLock = faLock;
  faCode = faCode;
  faFile = faFile;
  faDollar = faDollarSign;
  faView = faEye;
  faNoview = faEyeSlash;

  passWord1Type = 'password';
  passWord2Type = 'password';

 strongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [ Validators.required, Validators.minLength(8), Validators.pattern(this.strongPasswordRegx) ]),
    password2: new FormControl('', [ Validators.required, this.createNotMatchValidator() ]),
    skills: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(2), Validators.max(1000)]),
  });

  constructor(private userService: UserService, private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  togglePassword1Visibility() {

    this.passWord1Type = this.passWord1Type === 'password' ? 'text' : 'password';

  }

  togglePassword2Visibility() {

    this.passWord2Type = this.passWord2Type === 'password' ? 'text' : 'password';

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

      if (this.form.get('password1')?.hasError('required')) {
        return 'Se requiere una contraseña';
      }  else if (this.form.get('password')?.hasError('minlength')) {
        return 'La contraseña debe tener al menos 8 caracteres';
      } else if (this.form.get('password1')?.hasError('pattern')) {
        if (this.form.get('password1')?.value?.match('^(?=.*[A-Z])')) {
          return 'La contraseña debe tener al menos una letra mayúscula';
        }
        else if (this.form.get('password1')?.value?.match('^(?=.*[a-z])')) {
          return 'La contraseña debe tener al menos una letra minúscula';
        }
        else if (this.form.get('password1')?.value?.match('^(?=.*[0-9])')) {
          return 'La contraseña debe tener al menos un número';
        }
      }
      return this.form.get('password1')?.hasError('pattern') ? 'Password must have at least 8 characters, one uppercase, one lowercase and one number' : '';

    }

    password2ErrorMessages() {

      if (this.form.get('password2')?.hasError('required')) {
        return 'Se requiere confirmar la contraseña';
      } else if (this.form.get('password2')?.hasError('notMatch')) {
        return 'Las contraseñas no coinciden';
      }

      return this.form.get('password2')?.hasError('notMatch') ? 'Passwords do not match' : '';

    }

    createNotMatchValidator() : ValidatorFn {
      return (control: AbstractControl) => {
        return control.value === control.parent?.get("password1")?.value ? null : { notMatch: true };
      };
    }

    firstNameErrorMessages() {
      return this.form.get('firstName')?.hasError('required') ? 'Se requiere un nombre' : '';
    }

    lastNameErrorMessages() {
      return this.form.get('lastName')?.hasError('required') ? 'Se requiere un apellido' : '';
    }

    skillsErrorMessages() {
      return this.form.get('skills')?.hasError('required') ? 'Se requiere al menos una habilidad' : '';
    }

    priceErrorMessages() {
      if (this.form.get('price')?.hasError('required')) {
        return 'Se requiere un precio';
      } else if (this.form.get('price')?.hasError('min')) {
        return 'El precio debe ser mayor o igual a 2 $';
      } else if (this.form.get('price')?.hasError('max')) {
        return 'El precio no puede ser mayor a 1000 $';
      }
      return '';
    }

    register() {
      const user = new User();

      var firstName = this.form.get('firstName')?.value;

      if (firstName === null || firstName === '' || firstName === undefined) {
        return;
      }

      user.firstName = firstName;

      var lastName = this.form.get('lastName')?.value;

      if (lastName === null || lastName === '' || lastName === undefined) {
        return;
      }

      user.lastName = lastName;

      var email = this.form.get('email')?.value;

      if (email === null || email === '' || email === undefined) {
        return;
      }

      user.email = email;

      var password = this.form.get('password1')?.value;

      if (password === null || password === '' || password === undefined) {
        return;
      }

      user.password = password;

      var skills = this.form.get('skills')?.value;

      if (skills === null || skills === '' || skills === undefined) {
        return;
      }

      //user.skills = skills;

      var price = this.form.get('price')?.value;

      if (price === null || price === '' || price === undefined) {
        return;
      }

      //user.price = price;

      user.role = UserRole.FREELANCER;

      const freelancer = new FreelancerData();

      //freelancer.skills = skills.split(',');

      freelancer.price = parseFloat(price);

      user.freelancer = freelancer;

      this.userService.createEntity(user).subscribe((user) => {
        this.authService.login(user);
        this.router.navigate(['/']);
      });
    }

}
