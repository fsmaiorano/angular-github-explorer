import { TestBed } from '@angular/core/testing';

import { SidebarSingletonService } from './sidebar-singleton.service';

describe('SidebarSingletonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidebarSingletonService = TestBed.get(SidebarSingletonService);
    expect(service).toBeTruthy();
  });
});
