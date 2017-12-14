import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ImageObject } from '../../../image-object';
import { ContentService } from '../content.service';
import { NotificationService }  from '../notification.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detail: ImageObject;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private contentService: ContentService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.getDetail();
  }

  getDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contentService.sendDetail(id).subscribe(
      detail => this.detail = detail);
      this.notificationService.add('Image: ' + this.detail.name);
  }
  goBack(): void {
    this.location.back();
  }

}
