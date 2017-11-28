import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ImageObject } from '../../image-object';
import { ContentData } from '../../content-data';
import { HomeData } from '../../home-data';
import { TrendData } from '../../trend-data';
// import { ExploreData } from '../../explore-data';
import { ShopData } from '../../shop-data';
// import { Hero } from '../../hero';
// import { HEROES } from '../../mock-heroes';

@Injectable()
export class ContentService {
  exploreArray2: Observable<ImageObject[]>;
  content: Observable<ImageObject[]>;

  constructor() { }

  // sendHeroes(): Observable<Hero[]> {
  //   return of (HEROES);
  // }

  // sendHome(): Observable<ImageObject[]> {
  //   return of (HomeData);
  // }
  //
  // sendTrend(): Observable<ImageObject[]> {
  //   return of (TrendData);
  // }
  //
  // sendExplore(category: string): Observable<ImageObject[]> {
  //   return of (ExploreData.filter(exploreArray2 => exploreArray2.category === category));
  // }
  //
  // sendShop(): Observable<ImageObject[]> {
  //   return of (ShopData);
  // }

  sendContent(category: string): Observable<ImageObject[]> {
    return of (ContentData.filter(content => content.category === category));
  }

  // sendDetail(id: number): Observable<ImageObject> {
  //   return of (ExploreData.find(detail => detail.id === id));
  // }

}
