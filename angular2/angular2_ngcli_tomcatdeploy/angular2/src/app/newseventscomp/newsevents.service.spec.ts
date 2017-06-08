import { TestBed, inject } from '@angular/core/testing';
import { NewseventsService } from './newsevents.service';
describe('NewseventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewseventsService]
    });
  });

  it('should be created', inject([NewseventsService], (service: NewseventsService) => {
    expect(service).toBeTruthy();
  }));
});
