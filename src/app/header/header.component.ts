import { Component, OnInit } from '@angular/core';
// import { HeaderSidenavService } from '../section/main/header-sidenav.service';
// import { HeaderTopnavService } from '../section/main/header-topnav.service';
import { DrawerNavService } from '../drawer-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './_header-config.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeSearchIcon: boolean = false;
  public activeNotificationIcon: boolean = false;
  public activeLoginIcon: boolean = false;

  constructor(private drawerNavServive: DrawerNavService) { }

  ngOnInit() {
    this.drawerNavServive.getDrawerNav().subscribe(form => {
      if(form == 'submit') {
        this.activeLoginIcon = false;
      }
    })

  }
  toggleDrawerNav(which: string) {
    this.drawerNavServive.storeDrawerNav(which);
    if ( which == 'search') {
      this.activeSearchIcon = this.activeSearchIcon === true ? false : true;
      this.activeNotificationIcon = false;
      this.activeLoginIcon = false;
    }
    if ( which == 'notification') {
      this.activeNotificationIcon = this.activeNotificationIcon === true ? false : true;
      this.activeSearchIcon = false;
      this.activeLoginIcon = false;
    }if ( which == 'login') {
      this.activeLoginIcon = this.activeLoginIcon === true ? false : true;
      this.activeSearchIcon = false;
      this.activeNotificationIcon = false;
    }
    // else {
      // this.active = false;
    // }
  }

}
