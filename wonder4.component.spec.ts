import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wonder4Component } from './wonder4.component';

describe('Wonder4Component', () => {
  let component: Wonder4Component;
  let fixture: ComponentFixture<Wonder4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wonder4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wonder4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
