import { TestBed, inject } from '@angular/core/testing';

import { TosterService } from './toster.service';

describe('TosterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TosterService]
    });
  });

  it('should be created', inject([TosterService], (service: TosterService) => {
    expect(service).toBeTruthy();
  }));
});
