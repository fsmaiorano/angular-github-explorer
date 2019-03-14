import { TestBed } from '@angular/core/testing';

import { GithubSingletonService } from './github-singleton.service';

describe('GithubSingletonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubSingletonService = TestBed.get(GithubSingletonService);
    expect(service).toBeTruthy();
  });
});
