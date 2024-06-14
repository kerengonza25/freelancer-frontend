import { Injectable } from '@angular/core';
import { Avance } from '../model/avance.entity';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class AvanceService extends GenericService<Avance> {

  override apiUrl = './api/v1/avances';

}
