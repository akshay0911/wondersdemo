import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wonder6Component } from './wonder6.component';

describe('Wonder6Component', () => {
  let component: Wonder6Component;
  let fixture: ComponentFixture<Wonder6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wonder6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wonder6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
