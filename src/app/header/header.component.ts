import { Component } from '@angular/core';
import { HeaderNavService } from '../section/main/header-nav.service';
import { HeaderTopnavService } from '../section/main/header-topnav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './_header-config.component.scss']
})
export class HeaderComponent {
  constructor(private headerNavService: HeaderNavService,
    private HeaderTopnavService: HeaderTopnavService
  ) { }

  showSidenav(which: string) {
    this.headerNavService.storeSidenav(which);
  }

  showTopnav(which: string) {
    this.HeaderTopnavService.storeTopnav(which);
  }
}
