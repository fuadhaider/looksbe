import { Component, OnInit } from '@angular/core';

import { ImageObject } from '../../../image-object';
import { ContentService } from '../content.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements OnInit {
  searchArray: ImageObject[];
  tag: string = 'search';

  constructor(private contentService: ContentService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getSearch();
    this.notificationService.add('Visited: search!');
  }

  getSearch() {
    this.contentService.sendContent(this.tag).subscribe(searchArray =>
      this.searchArray = searchArray)
  }

}
