import { Component, OnInit } from '@angular/core';

import { ImageObject } from '../../../image-object';
import { ContentService } from '../content.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shopArray: ImageObject[];
  tag: string = 'shop';

  constructor(private contentService: ContentService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getShop();
    this.notificationService.add('Visited: shop!');
  }

  getShop() {
    this.contentService.sendContent(this.tag).subscribe(shopArray =>
      this.shopArray = shopArray)
  }

}
