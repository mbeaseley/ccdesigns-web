import { TestBed } from '@angular/core/testing';

import { BackendService } from './backend.service';
import { HttpClientModule } from '@angular/common/http';

describe('BackendService', () => {
  let service: BackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule],
      schemas: [],
      providers: [BackendService],
    });
    service = TestBed.inject(BackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
