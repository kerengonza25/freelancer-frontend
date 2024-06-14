import { Publicacion } from './publicacion.entity';
import { BaseEntity } from './base.entity';

export class PublicacionImagenes extends BaseEntity {

  url!: string;

  nombre!: string;

  tipo!: string;

  publicacion!: Publicacion;
}
