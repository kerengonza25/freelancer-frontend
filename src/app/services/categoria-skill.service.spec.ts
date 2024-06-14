import { TestBed } from '@angular/core/testing';

import { CategoriaSkillService } from './categoria-skill.service';

describe('CategoriaSkillService', () => {
  let service: CategoriaSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
