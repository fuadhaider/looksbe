import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Image } from '../../image';
import { Homes } from '../../homes';
import { Trends } from '../../trends';
import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';

@Injectable()
export class ContentService {

  constructor() { }

  sendHeroes(): Observable<Hero[]> {
    return of (HEROES);
  }

  sendHome(): Observable<Image[]> {
    return of (Homes);
  }

  sendTrend(): Observable<Image[]> {
    return of (Trends);
  }

}
