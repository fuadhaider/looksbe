import { Component } from '@angular/core';
// import { HeaderSidenavService } from '../section/main/header-sidenav.service';
// import { HeaderTopnavService } from '../section/main/header-topnav.service';
import { DrawerNavService } from '../drawer-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './_header-config.component.scss']
})
export class HeaderComponent {
  constructor(private drawerNavServive: DrawerNavService) { }

  toggleDrawerNav(which: string) {
    this.drawerNavServive.storeDrawerNav(which);
  }

}
