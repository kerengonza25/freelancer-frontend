import { Skill } from './skill.entity';
import { BaseEntity } from './base.entity';

export class CategoriaSkills extends BaseEntity {

  nombre!: string;

  descripcion!: string;

  skills!: Skill[];
}
