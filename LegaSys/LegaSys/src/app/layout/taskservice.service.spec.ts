import { TestBed, inject } from '@angular/core/testing';

import { TaskServiceService } from './taskservice.service';

describe('TaskServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskServiceService]
    });
  });

  it('should be created', inject([TaskServiceService], (service: TaskServiceService) => {
    expect(service).toBeTruthy();
  }));
});
