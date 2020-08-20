import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wonder2Component } from './wonder2.component';

describe('Wonder2Component', () => {
  let component: Wonder2Component;
  let fixture: ComponentFixture<Wonder2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wonder2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wonder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
