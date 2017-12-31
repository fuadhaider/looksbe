import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginDataService {
  private loginData = new Subject<any>();

  constructor() { }

  storeLoginData(email: string) {
    this.loginData.next(email);
  }

  sendLoginData(): Observable<any> {
    return this.loginData.asObservable();
  }

}
