import { Injectable } from '@angular/core';
import { CategoriaSkills } from '../model/categoria-skill.entity';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriaSkillService extends GenericService<CategoriaSkills> {

  override apiUrl = './api/v1/categoriaskill';

}
