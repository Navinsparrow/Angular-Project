import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sparrow2Component } from './sparrow2.component';

describe('Sparrow2Component', () => {
  let component: Sparrow2Component;
  let fixture: ComponentFixture<Sparrow2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sparrow2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sparrow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
