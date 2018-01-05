import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { ImageObject } from '../image-object';
import { ContentService } from '../content.service';
import { SearchTermService } from '../search-term.service';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements OnInit {
  searchArray: ImageObject[];
  searchTerm: string;

  constructor(private contentService: ContentService,
    private searchTermService: SearchTermService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.getSearchContent();
  }

  getSearchContent() {
    this.searchTerm = this.route.snapshot.paramMap.get('term');
    this.contentService.sendSearchContent(this.searchTerm).subscribe(searchArray =>
    this.searchArray = searchArray);

    this.searchTermService.sendSearchTerm().subscribe(term => {
      this.contentService.sendSearchContent(term).subscribe(searchArray =>
        this.searchArray = searchArray);
    });

  }

}
