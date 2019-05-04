import { TestBed } from '@angular/core/testing';

import { ComicLoadService } from './comic-load.service';

describe('ComicLoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComicLoadService = TestBed.get(ComicLoadService);
    expect(service).toBeTruthy();
  });
});
