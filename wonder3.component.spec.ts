import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wonder3Component } from './wonder3.component';

describe('Wonder3Component', () => {
  let component: Wonder3Component;
  let fixture: ComponentFixture<Wonder3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wonder3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wonder3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
