import { Component, OnInit } from '@angular/core';
import { HeaderNavService } from '../section/main/header-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './_header-config.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private headerNavService: HeaderNavService ) { }

  showSidenav(which: string) {
    this.headerNavService.storeSidenav(which);
  }

  ngOnInit() {
  }


}
