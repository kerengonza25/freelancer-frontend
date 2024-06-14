import { CategoriaSkills } from './categoria-skill.entity';
import { BaseEntity } from './base.entity';

export class Skill extends BaseEntity {

  nombre!: string;

  categoria!: CategoriaSkills;
}
