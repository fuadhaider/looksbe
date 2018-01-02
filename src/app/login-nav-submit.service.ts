import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginNavSubmitService {
  private loginNavSubmit = new Subject<any>();

  constructor() { }

  storeLoginNavSubmit(submit: string) {
    this.loginNavSubmit.next(submit);
  }

  sendLoginNavSubmit(): Observable<any> {
    return this.loginNavSubmit.asObservable();
  }

}
