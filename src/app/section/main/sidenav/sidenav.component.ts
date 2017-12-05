import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {MatSidenav} from '@angular/material/sidenav';

import { HeaderNavService } from '../header-nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  subscription: Subscription;
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private headerNavService: HeaderNavService) {
    // this.headerNavService.getMessage().subscribe(message => {
    //   console.log(message);
    // });
  }

  ngOnInit() {
    // this.headerNavService.events$.forEach(event => console.log(event));
    this.subscription = this.headerNavService.toggleSidenav().subscribe(which => {
      console.log(which);
      this.sidenav.toggle();
    });
  }

  ngOnDestroy() {
         // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
      }


}
