import { FreelancerData } from './freelancer-data.entity';
import { ReclutadorData } from './reclutador-data.entity';
import { BaseEntity } from './base.entity';
import { Aplicacion } from './aplicacion.entity';

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  USER = 'user',
  FREELANCER = 'freelancer',
  RECRUITER = 'recruiter',
}

export class User extends BaseEntity {

  firstName!: string;

  lastName!: string;

  email!: string;

  password!: string;

  imagen!: string;

  telefono!: string;

  direccion!: string;

  ciudad!: string;

  pais!: string;

  isVerified!: boolean;

  role!: UserRole;

  freelancer!: FreelancerData;

  reclutador!: ReclutadorData;

  aplicaciones!: Aplicacion[];
}
