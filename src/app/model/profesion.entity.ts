import { FreelancerData } from './freelancer-data.entity';
import { BaseEntity } from './base.entity';

export class Profesion extends BaseEntity {

  nombre!: string;

  usuarios!: FreelancerData[];
}
