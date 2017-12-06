import { TestBed, inject } from '@angular/core/testing';

import { HeaderTopnavService } from './header-topnav.service';

describe('HeaderTopnavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderTopnavService]
    });
  });

  it('should be created', inject([HeaderTopnavService], (service: HeaderTopnavService) => {
    expect(service).toBeTruthy();
  }));
});
