import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ImageObject } from '../../../image-object';
import { ContentService } from '../content.service';
// import { NotificationService } from '../notification.service';
import { SearchTermService } from '../search-term.service';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements OnInit {
  // subscription: Subscription;
  searchArray: ImageObject[];
  // tag: string = 'search';

  constructor(private contentService: ContentService,
    private searchTermService: SearchTermService) { }

  ngOnInit() {
    this.getSearch();
    // this.notificationService.add('Visited: search!');
  }

  getSearch() {
    this.searchTermService.sendSearchTerm().subscribe(term => {
      this.contentService.sendContent(term).subscribe(searchArray =>
        this.searchArray = searchArray);
        console.log(term);
    });

  }

}
