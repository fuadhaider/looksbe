import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeaderNavService {
  private sidenav = new Subject<any>();
  constructor() { }
  storeSidenav(which) {
    this.sidenav.next(which);
  }
 //  get events$ () {
 //   return this.subject.asObservable();
 // }
   toggleSidenav(): Observable<any> {
      return this.sidenav.asObservable();
   }
}
