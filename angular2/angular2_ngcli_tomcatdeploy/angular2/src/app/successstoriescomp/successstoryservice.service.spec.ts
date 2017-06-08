import { TestBed, inject } from '@angular/core/testing';

import { SuccessstoryserviceService } from './successstoryservice.service';

describe('SuccessstoryserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuccessstoryserviceService]
    });
  });

  it('should be created', inject([SuccessstoryserviceService], (service: SuccessstoryserviceService) => {
    expect(service).toBeTruthy();
  }));
});
