import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CountryObject } from './country-object';
import { CountryData } from '../../../country-data';

@Injectable()
export class CountryService {
  country: Observable<CountryObject[]>;

  constructor() { }

  sendCountry(letter: string): Observable<CountryObject[]> {
    if (!letter.trim()) {
      console.log('empty');
      return of([]);
    }
    else {
      letter = letter.toLowerCase();
      return of (CountryData.filter(content => {
        return content.name.toLowerCase().includes(letter);
      }));
    }
  }
}
