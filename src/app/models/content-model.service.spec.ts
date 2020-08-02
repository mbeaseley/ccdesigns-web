import { TestBed } from '@angular/core/testing';

import { ContentModelService } from './content-model.service';

describe('ContentModelService', () => {
  let service: ContentModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
