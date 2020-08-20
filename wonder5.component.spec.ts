import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wonder5Component } from './wonder5.component';

describe('Wonder5Component', () => {
  let component: Wonder5Component;
  let fixture: ComponentFixture<Wonder5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wonder5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wonder5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
