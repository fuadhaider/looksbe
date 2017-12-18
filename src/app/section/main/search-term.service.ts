import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { NotificationService } from './notification.service';

@Injectable()
export class SearchTermService {
  private searchTerm = new Subject<any>();

  constructor(private notificationService: NotificationService) { }

  storeSearchTerm(term: string) {
    this.notificationService.add('Searched: ' + term);
    this.searchTerm.next(term);
  }

  sendSearchTerm(): Observable<any> {
    return this.searchTerm.asObservable();
  }
}
