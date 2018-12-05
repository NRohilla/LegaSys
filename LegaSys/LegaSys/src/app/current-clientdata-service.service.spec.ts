import { TestBed, inject } from '@angular/core/testing';

import { CurrentClientdataServiceService } from './current-clientdata-service.service';

describe('CurrentClientdataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentClientdataServiceService]
    });
  });

  it('should be created', inject([CurrentClientdataServiceService], (service: CurrentClientdataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
