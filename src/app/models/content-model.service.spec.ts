import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BackendService } from '../services/backend.service';
import { ContentModelService } from './content-model.service';

describe('ContentModelService', () => {
  let service: ContentModelService;

  const backendService = {
    get: jest.fn().mockResolvedValue({}),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule],
      providers: [{ provide: backendService, useValue: BackendService }],
    });
    service = TestBed.inject(ContentModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
