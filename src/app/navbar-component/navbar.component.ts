import { Component, OnInit } from '@angular/core';
import { faUser, faRightFromBracket, faGear, faSearch, faComment } from '@fortawesome/free-solid-svg-icons';
import { User } from '../model/user.entity';
import { AuthServiceService } from '../services/authService.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faRightFromBracket = faRightFromBracket;
  faUser = faUser;
  faGear = faGear;
  faSearch = faSearch;
  faMessages = faComment

  isLogedIn : boolean = false;

  user : User | null = null;

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
    this.isLogedIn = this.authService.isLoggedIn();
    this.user = this.authService.getUser();

    this.authService.loginEvent.subscribe((user) => {
      this.isLogedIn = true;
      this.user = user;
    });

  }

  logout() {
    this.isLogedIn = false;
    this.user = null;
    this.authService.logout();
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

}
