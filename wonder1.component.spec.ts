import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wonder1Component } from './wonder1.component';

describe('Wonder1Component', () => {
  let component: Wonder1Component;
  let fixture: ComponentFixture<Wonder1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wonder1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wonder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
