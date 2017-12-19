import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { DrawerNavService } from '../../../drawer-nav.service';
// import { ContentService } from '../content.service';
import { SearchTermService } from '../search-term.service';

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
      transition('in => out', animate('200ms ease-out')),
      transition('out => in', animate('0ms ease-out'))

    ])
  ]
})
export class SearchNavComponent implements OnInit {
  // subscription: Subscription;
  searchNavState: string = 'in';
  searchTerm: string;

  constructor(private drawerNavService: DrawerNavService,
    private searchTermService: SearchTermService) { }

  ngOnInit() {
    // this.subscription =
    this.drawerNavService.getDrawerNav().subscribe(which => {
      if ( which == 'search') {
        this.searchNavState = (this.searchNavState === 'in' ? 'out' : 'in');
      }
      else {
        this.searchNavState = 'in';
      }
    })
  }

  searchContent(term: string) {
    this.searchTermService.storeSearchTerm(term);
  }

}
