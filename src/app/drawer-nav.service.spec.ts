import { TestBed, inject } from '@angular/core/testing';

import { DrawerNavService } from './drawer-nav.service';

describe('DrawerNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawerNavService]
    });
  });

  it('should be created', inject([DrawerNavService], (service: DrawerNavService) => {
    expect(service).toBeTruthy();
  }));
});
