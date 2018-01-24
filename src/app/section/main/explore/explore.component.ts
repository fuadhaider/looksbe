import { Component, OnInit } from '@angular/core';

import { ImageObject } from '../image-object';

import { ContentService } from '../content.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  exploreArray: ImageObject[];
  tag: string = 'explore';

  constructor(private contentService: ContentService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getExplore();
    this.notificationService.add('Visited: explore!');
  }

  getExplore() {
    this.contentService.sendContent(this.tag).subscribe(exploreArray =>
      this.exploreArray = exploreArray)
  }

}
