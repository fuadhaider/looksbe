import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { HeaderNavService } from '../header-nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  un: Subscription;
  constructor(private headerNavService: HeaderNavService) {
    // this.headerNavService.getMessage().subscribe(message => {
    //   console.log(message);
    // });
  }

  ngOnInit() {
    // this.headerNavService.events$.forEach(event => console.log(event));
    this.un = this.headerNavService.getMessage().subscribe(message => {
      console.log(message);
    });
  }

  ngOnDestroy() {
         // unsubscribe to ensure no memory leaks
        this.un.unsubscribe();
      }


}
