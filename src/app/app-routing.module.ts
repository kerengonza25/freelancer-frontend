import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-component/login.component';
import { RegisterComponent } from './register-component/register.component';
import { HomeComponent } from './home-component/home.component';
import { MessagesComponent } from './messages-component/messages.component';
import { UserListComponent } from './user-list-component/user-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register/:type', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
