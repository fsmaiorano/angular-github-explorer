import { TestBed } from '@angular/core/testing';

import { HeaderSingletonService } from './header-singleton.service';

describe('HeaderSingletonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderSingletonService = TestBed.get(HeaderSingletonService);
    expect(service).toBeTruthy();
  });
});
