import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TalktalkSalesComponent } from './talktalk-sales.component';

describe('TalktalkSalesComponent', () => {
  let component: TalktalkSalesComponent;
  let fixture: ComponentFixture<TalktalkSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TalktalkSalesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalktalkSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
