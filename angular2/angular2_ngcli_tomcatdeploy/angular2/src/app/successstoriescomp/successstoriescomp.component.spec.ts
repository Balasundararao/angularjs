import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessstoriescompComponent } from './successstoriescomp.component';

describe('SuccessstoriescompComponent', () => {
  let component: SuccessstoriescompComponent;
  let fixture: ComponentFixture<SuccessstoriescompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessstoriescompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessstoriescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
