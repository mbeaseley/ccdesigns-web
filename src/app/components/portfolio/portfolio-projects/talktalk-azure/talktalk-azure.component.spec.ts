import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TalktalkAzureComponent } from './talktalk-azure.component';

describe('TalktalkAzureComponent', () => {
  let component: TalktalkAzureComponent;
  let fixture: ComponentFixture<TalktalkAzureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TalktalkAzureComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalktalkAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
