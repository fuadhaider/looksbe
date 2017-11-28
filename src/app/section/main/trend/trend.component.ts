import { Component, OnInit } from '@angular/core';

import { ImageObject } from '../../../image-object';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent implements OnInit {
  trendArray: ImageObject[];
  tag: string = 'trend';

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getTrend();
  }

  getTrend() {
    this.contentService.sendContent(this.tag).subscribe(trendArray =>
      this.trendArray = trendArray)
  }

}
