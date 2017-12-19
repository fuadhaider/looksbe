import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
// import { Router } from '@angular/router';

import { ImageObject } from '../../../image-object';
import { ContentService } from '../content.service';
import { SearchTermService } from '../search-term.service';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements OnInit {
  searchArray: ImageObject[];

  constructor(private contentService: ContentService,
    private searchTermService: SearchTermService) { }
    // ,private router: Router
  ngOnInit() {
    // this.router.navigate(['/', 'search']);

    this.getSearch();
  }

  getSearch() {
    // this.router.navigate(['/', 'search']);

    this.searchTermService.sendSearchTerm().subscribe(term => {
      this.contentService.sendSearchContent(term).subscribe(searchArray =>
        this.searchArray = searchArray);
        console.log(term);
    });

  }

}
