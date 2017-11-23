import { Component, OnInit } from '@angular/core';

import { Image } from '../../../image';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homes: Image[];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getHome();
  }

  getHome(): void {
    this.contentService.sendHome().subscribe(homes => this.homes = homes);
  }

}
