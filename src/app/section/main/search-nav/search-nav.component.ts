import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { DrawerNavService } from '../../../drawer-nav.service';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.scss'],
  animations: [
    trigger('searchNavToggle', [
      state('in', style({
        opacity: 0,
        display: 'none'
      })),
      state('out', style({
        opacity: 1,
        display: 'block'
      })),
      transition('in <=> out', animate('200ms ease-in-out'))
    ])
  ]
})
export class SearchNavComponent implements OnInit {
  subscription: Subscription;
  searchNavState: string = 'in';

  constructor(private drawerNavService: DrawerNavService) { }

  ngOnInit() {
    this.subscription = this.drawerNavService.getDrawerNav().subscribe(which => {
      if ( which == 'search') {
        this.searchNavState = (this.searchNavState === 'in' ? 'out' : 'in');
      }
      else {
        this.searchNavState = 'in';
      }
    })
  }

}
