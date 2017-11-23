import { Component, OnInit } from '@angular/core';

import { Image } from '../../../image';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent implements OnInit {
  trends: Image[];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getTrend();
  }

  getTrend(): void {
    this.contentService.sendTrend().subscribe(trends => this.trends = trends);

  }

}
