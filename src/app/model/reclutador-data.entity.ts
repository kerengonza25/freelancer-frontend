import { User } from './user.entity';
import { Trabajo } from './trabajo.entity';
import { BaseEntity } from './base.entity';

export class ReclutadorData extends BaseEntity {

  usuario!: User;

  nombreEmpresa!: string;

  numColaboradores!: number;

  web!: string;

  descripcion!: string;

  logo!: string;

  numPublicaciones!: number;

  trabajos!: Trabajo[];
}
