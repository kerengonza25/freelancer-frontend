import { Injectable } from '@angular/core';
import { Publicacion } from '../model/publicacion.entity';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class PublicacionService extends GenericService<Publicacion> {

  override apiUrl = './api/v1/publicaciones';

}
