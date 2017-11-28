import { Component, OnInit } from '@angular/core';

import { ImageObject } from '../../../image-object';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  exploreArray: ImageObject[];
  tag: string = 'explore';

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getExplore();
  }

  getExplore() {
    this.contentService.sendContent(this.tag).subscribe(exploreArray =>
      this.exploreArray = exploreArray)
  }

}
