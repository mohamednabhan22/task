import { TestBed } from '@angular/core/testing';

import { ProgramServiceService } from './program-service.service';

describe('ProgramServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramServiceService = TestBed.get(ProgramServiceService);
    expect(service).toBeTruthy();
  });
});
