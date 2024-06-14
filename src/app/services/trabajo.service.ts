import { Injectable } from '@angular/core';
import { Trabajo } from '../model/trabajo.entity';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class TrabajoService extends GenericService<Trabajo> {

  override apiUrl = './api/v1/trabajos';

}
