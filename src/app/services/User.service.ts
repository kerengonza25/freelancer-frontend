import { Injectable } from '@angular/core';
import { User } from '../model/user.entity';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends GenericService<User> {

  override apiUrl = './api/v1/users';

}
