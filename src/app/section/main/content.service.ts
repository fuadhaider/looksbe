import { Injectable } from '@angular/core';
import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';

@Injectable()
export class ContentService {

  constructor() { }

  sendHeroes(): Hero[] {
    return HEROES;
  }

}
