import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../hero';
import { HEROES } from '../../../mock-heroes';

import { ContentService } from '../content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  heroes: Hero[];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroes = this.contentService.sendHeroes();
    this.contentService.sendHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
