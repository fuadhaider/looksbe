import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeaderTopnavService {
  private topnav = new Subject<any>();
  constructor() { }
  storeTopnav(which: string) {
    this.topnav.next(which);
  }

  toggleTopnav(): Observable<any> {
    return this.topnav.asObservable();
  }
}
