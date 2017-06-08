import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotecompComponent } from './quotecomp.component';

describe('QuotecompComponent', () => {
  let component: QuotecompComponent;
  let fixture: ComponentFixture<QuotecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
