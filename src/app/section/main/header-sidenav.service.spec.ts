import { TestBed, inject } from '@angular/core/testing';

import { HeaderSidenavService } from './header-sidenav.service';

describe('HeaderNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderSidenavService]
    });
  });

  it('should be created', inject([HeaderSidenavService], (service: HeaderSidenavService) => {
    expect(service).toBeTruthy();
  }));
});
