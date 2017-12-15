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

}
