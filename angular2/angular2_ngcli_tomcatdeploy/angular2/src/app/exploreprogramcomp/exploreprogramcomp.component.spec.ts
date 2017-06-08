import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreprogramcompComponent } from './exploreprogramcomp.component';

describe('ExploreprogramcompComponent', () => {
  let component: ExploreprogramcompComponent;
  let fixture: ComponentFixture<ExploreprogramcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreprogramcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreprogramcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
