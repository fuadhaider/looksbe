import { Component } from '@angular/core';
import { HeaderSidenavService } from '../section/main/header-sidenav.service';
import { HeaderTopnavService } from '../section/main/header-topnav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './_header-config.component.scss']
})
export class HeaderComponent {
  constructor(private headerSidenavService: HeaderSidenavService,
    private HeaderTopnavService: HeaderTopnavService
  ) { }

  showSidenav(which: string) {
    this.headerSidenavService.storeSidenav(which);
  }

  showTopnav(which: string) {
    this.HeaderTopnavService.storeTopnav(which);
  }
}
