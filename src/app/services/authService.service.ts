import { EventEmitter, Injectable } from '@angular/core';
import { User, UserRole } from '../model/user.entity';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  public loginEvent = new EventEmitter<User>();

  public logoutEvent = new EventEmitter<void>();

  constructor(private router: Router) {}

  login(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.loginEvent.emit(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    this.logoutEvent.emit();
  }

  public isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  public isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  public getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isRecruiter(): boolean {
    const user = this.getUser();
    return user! && user.role === UserRole.RECRUITER;
  }

  isFreelancer(): boolean {
    const user = this.getUser();
    return user! && user.role === UserRole.FREELANCER;
  }
}
