import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wonder7Component } from './wonder7.component';

describe('Wonder7Component', () => {
  let component: Wonder7Component;
  let fixture: ComponentFixture<Wonder7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wonder7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wonder7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
