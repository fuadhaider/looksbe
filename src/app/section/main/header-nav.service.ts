import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeaderNavService {
  private subject = new Subject<any>();
  constructor() { }
  newEvent(event) {
    this.subject.next(event);
  }
 //  get events$ () {
 //   return this.subject.asObservable();
 // }
   getMessage(): Observable<any> {
      return this.subject.asObservable();
   }
}
