import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExebriefcasepageComponent } from './exebriefcasepage.component';

describe('ExebriefcasepageComponent', () => {
  let component: ExebriefcasepageComponent;
  let fixture: ComponentFixture<ExebriefcasepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExebriefcasepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExebriefcasepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
