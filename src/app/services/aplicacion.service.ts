import { Injectable } from '@angular/core';
import { Aplicacion } from '../model/aplicacion.entity';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class AplicacionService extends GenericService<Aplicacion> {

  override apiUrl = './api/v1/aplicacion';

}
