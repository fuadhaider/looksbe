import { TestBed, inject } from '@angular/core/testing';

import { HeaderNavService } from './header-nav.service';

describe('HeaderNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderNavService]
    });
  });

  it('should be created', inject([HeaderNavService], (service: HeaderNavService) => {
    expect(service).toBeTruthy();
  }));
});
