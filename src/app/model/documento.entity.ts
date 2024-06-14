import { Avance } from './avance.entity';
import { BaseEntity } from './base.entity';

export class Documento extends BaseEntity {

  nombre!: string;

  url!: string;

  tipo!: string;

  avance!: Avance;
}
