import { TestBed } from '@angular/core/testing';
import { ContentModelService } from '../models/content-model.service';

import { ContentService } from './content.service';

describe('ContentService', () => {
  let service: ContentService;

  const contentModalService = {
    getContent: jest.fn().mockResolvedValue({}),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [{ provide: ContentModelService, useValue: contentModalService }],
    });
    service = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
