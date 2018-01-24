import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

import { DrawerNavService } from '../../../drawer-nav.service';
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
  searchNavState: string = 'in';

  constructor(private drawerNavService: DrawerNavService,
    private searchTermService: SearchTermService, private router: Router) { }

  ngOnInit() {
    this.drawerNavService.getDrawerNav().subscribe(which => {
      if ( which == 'search') {
        this.searchNavState = (this.searchNavState === 'in' ? 'out' : 'in');
      }
      else if ( which == 'sidenav') {
        this.searchNavState = this.searchNavState;
      }
      else {
        this.searchNavState = 'in';
      }
    })
  }

  searchContent(term: string) {
    this.router.navigate(['/search', term]);
    this.searchTermService.storeSearchTerm(term);
  }

}
