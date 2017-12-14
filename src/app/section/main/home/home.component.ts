import { Component, OnInit } from '@angular/core';

import { ImageObject } from '../../../image-object';
import { ContentService } from '../content.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeArray: ImageObject[];
  tag: string = 'home';

  constructor(private contentService: ContentService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getAll();
    this.notificationService.add('Visited: home!');
  }

  getAll(): void {
    this.contentService.sendAll().subscribe(homeArray =>
      this.homeArray = homeArray);
  }

}
