import { TestBed } from '@angular/core/testing';

import { CalculService } from './calcul.service';

describe('CalculService', () => {
  let service: CalculService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
