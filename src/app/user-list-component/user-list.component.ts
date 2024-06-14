import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { UserService } from '../services/User.service';
import { Observable } from 'rxjs';
import { User, UserRole } from '../model/user.entity';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  allUsers: User[] = [];
  users: User[] = [];
  currentPage: number = 1;
  pageSize: number = 2;
  totalItems: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  async fetchUsers() {
    try {
      const response = this.userService.getEntities();
      response.subscribe((data) => {
        this.allUsers = data;
        this.totalItems = this.allUsers.length;
        this.getUsersForPage(this.currentPage, this.pageSize);
      });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  getUsersForPage(page: number, pageSize: number) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    this.users = this.allUsers.slice(start, end);
  }

  onPageChange(page: any) {
    console.log('Page changed to:', page);
    this.currentPage = page;
    this.getUsersForPage(this.currentPage, this.pageSize);
  }

  onPageChange2(page: any) {
    console.log('Page changed to:', page);
    //this.currentPage = page.;
    this.getUsersForPage(this.currentPage, this.pageSize);
  }

  deleteUser(user: User) {
    Swal.fire({
      title: '¿Estas seguro de eliminar este usuario?',
      text: 'No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.userService.deleteEntity(user.id).subscribe((data) => {
          this.fetchUsers();
          Swal.fire('Eliminado!', 'El usuario se ha eliminado.', 'success');
        });
      }
    });
  }

  editUser(user: User) {
    this.userService.updateEntity(user.id, user).subscribe((data) => {
      this.fetchUsers();
      Swal.fire('Actualizado!', 'El usuario se ha actualizado.', 'success');
    });
  }

  createUser(user: User) {
    this.userService.createEntity(user).subscribe((data) => {
      this.fetchUsers();
      Swal.fire('Creado!', 'El usuario se ha creado.', 'success');
    });
  }

  createUserModal() {
    function enumFromStringValue<T> (enm: { [s: string]: T}, value: string): T | undefined {
      return (Object.values(enm) as unknown as string[]).includes(value)
        ? value as unknown as T
        : undefined;
    }
    Swal.fire({
      title: 'Crear Usuario',
      html:
        '<input id="swal-input1" class="swal2-input input input-bordered" type="text" placeholder="Nombre">' +
        '<input id="swal-input2" class="swal2-input input input-bordered" type="text" placeholder="Apellido">'+
        '<input id="swal-input3" class="swal2-input input input-bordered" type="text" placeholder="Email">'+
        '<input id="swal-input4" class="swal2-input input input-bordered" type="password" placeholder="Password">'+
        '<select id="swal-input5" class="select select-bordered swal2-input w-full max-w-xs"> <option disabled selected>Seleccione Una opcion</option> <option>admin</option> <option>freelancer</option> <option>recruiter</option> </select>',
      focusConfirm: false,
      preConfirm: () => {
        const firstName = (document.getElementById('swal-input1') as HTMLInputElement).value;
        const lastName = (document.getElementById('swal-input2') as HTMLInputElement).value;
        const email = (document.getElementById('swal-input3') as HTMLInputElement).value;
        const password = (document.getElementById('swal-input4') as HTMLInputElement).value;
        const role = (document.getElementById('swal-input5') as HTMLInputElement).value;

        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        user.role = enumFromStringValue(UserRole, role) || UserRole.USER;
        this.createUser(user);
      }
    });

  }

  editUserModal(user: User) {
    function enumFromStringValue<T> (enm: { [s: string]: T}, value: string): T | undefined {
      return (Object.values(enm) as unknown as string[]).includes(value)
        ? value as unknown as T
        : undefined;
    }
    Swal.fire({
      title: 'Editar Usuario',
      html:
        '<input id="swal-input1" class="swal2-input input input-bordered" type="text" placeholder="Nombre" value="' + user.firstName + '">' +
        '<input id="swal-input2" class="swal2-input input input-bordered" type="text" placeholder="Apellido" value="' + user.lastName + '">' +
        '<input id="swal-input3" class="swal2-input input input-bordered" type="text" placeholder="Email" value="' + user.email + '">' +
        '<input id="swal-input4" class="swal2-input input input-bordered" type="password" placeholder="Password" value="' + user.password + '">' +
        '<select id="swal-input5" class="select select-bordered swal2-input w-full max-w-xs">'+
        '<option disabled selected>Seleccione Una opcion</option>'+
        '<option '+ (user.role == UserRole.ADMIN ? 'selected' : '') +'>admin</option>'+
        '<option '+ (user.role == UserRole.FREELANCER ? 'selected' : '') +'>freelancer</option>'+
        '<option '+ (user.role == UserRole.RECRUITER ? 'selected' : '') +'>recruiter</option> </select>',
      focusConfirm: false,
      preConfirm: () => {
        const firstName = (document.getElementById('swal-input1') as HTMLInputElement).value;
        const lastName = (document.getElementById('swal-input2') as HTMLInputElement).value;
        const email = (document.getElementById('swal-input3') as HTMLInputElement).value;
        const password = (document.getElementById('swal-input4') as HTMLInputElement).value;
        const role = (document.getElementById('swal-input5') as HTMLInputElement).value;

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        user.role = enumFromStringValue(UserRole, role) || UserRole.USER;
        this.editUser(user);
      }
    });
   }

}
