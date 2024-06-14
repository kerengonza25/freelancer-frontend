import { Injectable } from '@angular/core';
import { Skill } from '../model/skill.entity';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class SkillService extends GenericService<Skill> {

  override apiUrl = './api/v1/skill';

}
