import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { NotificationService } from './section/main/notification.service';

@Injectable()
export class DrawerNavService {
  private drawerNav = new Subject<any>();

  constructor(private notificationService: NotificationService) { }
  storeDrawerNav(which: string) {
    this.notificationService.add('Clicked ' + which);
    this.drawerNav.next(which);
  }

  getDrawerNav(): Observable<any> {
    return this.drawerNav.asObservable();
  }

}
