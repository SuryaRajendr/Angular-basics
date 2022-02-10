import { TestBed } from '@angular/core/testing';

import { SuryaService } from './surya.service';

describe('SuryaService', () => {
  let service: SuryaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuryaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
