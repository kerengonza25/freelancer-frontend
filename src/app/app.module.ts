import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar-component/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login-component/login.component';
import { RegisterComponent } from './register-component/register.component';
import { RegisterSelectorComponent } from './register-selector/register-selector.component';
import { RegisterFreelancerComponent } from './register-freelancer/register-freelancer.component';
import { RegisterHirerComponent } from './register-hirer/register-hirer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { HomeComponent } from './home-component/home.component';
import { MessagesComponent } from './messages-component/messages.component';
import { NguCarouselModule } from '@ngu/carousel';
import { UserListComponent } from './user-list-component/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSelectorComponent,
    RegisterFreelancerComponent,
    RegisterHirerComponent,
    HomeComponent,
    MessagesComponent,
    UserListComponent,
    PaginationComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    NguCarouselModule,
    HttpClientModule,
    CommonModule,
    SweetAlert2Module.forRoot(),
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
