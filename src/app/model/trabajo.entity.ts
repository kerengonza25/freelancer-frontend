import { Publicacion } from './publicacion.entity';
import { User } from './user.entity';
import { Avance } from './avance.entity';
import { BaseEntity } from './base.entity';

export class Trabajo extends BaseEntity {

  titulo!: string;

  descripcion!: string;

  fechaInicio!: Date;

  fechaFin!: Date;

  salario!: number;

  salarioPorHora!: boolean;

  publicacion!: Publicacion;

  autor!: User;

  trabajadores!: User[];

  avances!: Avance[];
}
