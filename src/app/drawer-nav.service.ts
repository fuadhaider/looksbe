import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DrawerNavService {
  private drawerNav = new Subject<any>();

  constructor() { }
  storeDrawerNav(which: string) {
    this.drawerNav.next(which);
  }

  getDrawerNav(): Observable<any> {
    return this.drawerNav.asObservable();

  }


}
