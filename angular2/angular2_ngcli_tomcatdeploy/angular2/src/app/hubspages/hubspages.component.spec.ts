import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubspagesComponent } from './hubspages.component';

describe('HubspagesComponent', () => {
  let component: HubspagesComponent;
  let fixture: ComponentFixture<HubspagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubspagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubspagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
