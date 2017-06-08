import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewseventscompComponent } from './newseventscomp.component';

describe('NewseventscompComponent', () => {
  let component: NewseventscompComponent;
  let fixture: ComponentFixture<NewseventscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewseventscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewseventscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
