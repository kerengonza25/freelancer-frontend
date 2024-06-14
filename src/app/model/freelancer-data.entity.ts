
import { Skill } from './skill.entity';
import { Profesion } from './profesion.entity';
import { User } from './user.entity';
import { Publicacion } from './publicacion.entity';
import { Trabajo } from './trabajo.entity';
import { Avance } from './avance.entity';
import { BaseEntity } from './base.entity';

export class FreelancerData extends BaseEntity {

  usuario!: User;

  profesion!: Profesion;

  especialidad!: string;

  web!: string;

  descripcion!: string;

  curriculum!: string;

  price!: number;

  skills!: Skill[];

  numProyectos!: number;

  numValoraciones!: number;

  valoracionMedia!: number;


  numValoracionesNegativas!: number;

  numValoracionesPositivas!: number;

  aplicaciones!: Publicacion[];

  avances!: Avance[];
}
