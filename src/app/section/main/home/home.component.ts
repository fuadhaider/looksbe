import { Component, OnInit } from '@angular/core';

import { ImageObject } from '../../../image-object';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeArray: ImageObject[];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getHome();
  }

  getHome(): void {
    // this.contentService.sendHome().subscribe(
    //   homeArray => this.homeArray = homeArray);
  }

}
