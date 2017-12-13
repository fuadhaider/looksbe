import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatSidenav } from '@angular/material/sidenav';
// import { Observable } from 'rxjs';

import { HeaderSidenavService } from '../header-sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  subscription: Subscription;
  @ViewChild('sidenav') sidenav: MatSidenav;
  current1: String = 'message';
  current2: String = 'notification';

  constructor(private headerSidenavService: HeaderSidenavService) {
    // this.headerNavService.getMessage().subscribe(message => {
    //   console.log(message);
    // });
  }

  ngOnInit() {
    // this.headerNavService.events$.forEach(event => console.log(event));
    this.subscription = this.headerSidenavService.toggleSidenav().subscribe(which => {
      // if ( this.current1 == which || this.current2 == which) {
      //   this.current1 = this.current2 = which;
        console.log(which);
        this.sidenav.toggle();
      // }

    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
