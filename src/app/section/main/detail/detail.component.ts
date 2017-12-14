import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ImageObject } from '../../../image-object';
import { ContentService } from '../content.service';

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
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.getDetail();
  }

  getDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contentService.sendDetail(id).subscribe(
      detail => this.detail = detail);
  }
  goBack(): void {
    this.location.back();
  }

}