import { TestBed } from '@angular/core/testing';

import { KangarooService } from './kangaroo.service';

describe('KangarooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KangarooService = TestBed.get(KangarooService);
    expect(service).toBeTruthy();
  });
});
