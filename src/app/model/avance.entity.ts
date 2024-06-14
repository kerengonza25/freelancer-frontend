import { Trabajo } from './trabajo.entity';
import { User } from './user.entity';
import { Documento } from './documento.entity';
import { BaseEntity } from './base.entity';

export class Avance extends BaseEntity {

  descripcion!: string;

  fecha!: Date;

  trabajo!: Trabajo;

  usuario!: User;

  porcentaje!: number;

  estado!: string;

  horas!: number;

  documentos!: Documento[];
}
