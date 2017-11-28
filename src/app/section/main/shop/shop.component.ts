import { Component, OnInit } from '@angular/core';

import { ImageObject } from '../../../image-object';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shopArray: ImageObject[];
  tag: string = 'shop';

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getShop();
  }

  getShop() {
    this.contentService.sendContent(this.tag).subscribe(shopArray =>
      this.shopArray = shopArray)
  }

}
