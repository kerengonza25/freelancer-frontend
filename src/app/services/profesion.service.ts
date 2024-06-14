import { Injectable } from '@angular/core';
import { Profesion } from '../model/profesion.entity';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class ProfesionService extends GenericService<Profesion> {

  override apiUrl = './api/v1/profesion';

}
