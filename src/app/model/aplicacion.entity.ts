
import { User } from './user.entity';
import { Publicacion } from './publicacion.entity';
import { BaseEntity } from './base.entity';

export class Aplicacion extends BaseEntity {

  usuario!: User;

  publicacion!: Publicacion;

  mensaje!: string;

  estado!: string;
}
