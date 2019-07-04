import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TalktalkComponentComponent } from './talktalk-component.component';

describe('FypProjectComponent', () => {
  let component: TalktalkComponentComponent;
  let fixture: ComponentFixture<TalktalkComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TalktalkComponentComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalktalkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
