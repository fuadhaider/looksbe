import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatSidenav } from '@angular/material/sidenav';

import { DrawerNavService } from '../../../drawer-nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  subscription: Subscription;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private drawerNavServive: DrawerNavService) {}

  ngOnInit() {
    this.subscription = this.drawerNavServive.getDrawerNav().subscribe(which => {
      if ( which == 'notification') {
        this.sidenav.toggle();
      }
      else {
        this.sidenav.close();
      }
    });
  }

  deactivateIcon() {
    this.drawerNavServive.storeDrawerNav('sidenav');
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
