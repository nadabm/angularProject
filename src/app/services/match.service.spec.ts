import { TestBed } from '@angular/core/testing';

import { MatchService } from '../match-layout/match.service';

describe('ProductService', () => {
  let service: MatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
