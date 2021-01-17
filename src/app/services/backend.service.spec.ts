import { TestBed } from '@angular/core/testing';

import { BackendService } from './backend.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BackendService', () => {
  let service: BackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [BackendService],
    });
    service = TestBed.get(BackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
