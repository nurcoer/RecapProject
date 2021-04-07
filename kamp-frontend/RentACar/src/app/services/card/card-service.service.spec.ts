import { TestBed } from '@angular/core/testing';

import { CardServiceService } from './card-service.service';

describe('CardServiceService', () => {
  let service: CardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
