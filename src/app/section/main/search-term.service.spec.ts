import { TestBed, inject } from '@angular/core/testing';

import { SearchTermService } from './search-term.service';

describe('SearchTermService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchTermService]
    });
  });

  it('should be created', inject([SearchTermService], (service: SearchTermService) => {
    expect(service).toBeTruthy();
  }));
});
