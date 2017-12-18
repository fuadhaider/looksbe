import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ImageObject } from '../../image-object';
import { ContentData } from '../../../content-data';

@Injectable()
export class ContentService {
  content: Observable<ImageObject[]>;

  constructor() { }

  sendAll(): Observable<ImageObject[]> {
    return of (ContentData);
  }

  sendContent(category: string): Observable<ImageObject[]> {
    return of (ContentData.filter(content => content.category === category));
  }

  sendDetail(id: number): Observable<ImageObject> {
    return of (ContentData.find(detail => detail.id === id));
  }

  sendSearchContent(term: string): Observable<ImageObject[]> {
    if (!term.trim()) {
      return of([]);
    }
    return of (ContentData.filter(content => content.name === term));
    // return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
    //   tap(_ => this.log(`found heroes matching "${term}"`)),
    //   catchError(this.handleError<Hero[]>('searchHeroes', []))
    // );
  }

}
