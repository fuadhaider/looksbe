import { TestBed, inject } from '@angular/core/testing';

import { LoginNavSubmitService } from './login-nav-submit.service';

describe('LoginNavSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginNavSubmitService]
    });
  });

  it('should be created', inject([LoginNavSubmitService], (service: LoginNavSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
