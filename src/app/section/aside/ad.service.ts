import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem }               from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come',
       path: '../../assets/HTML5-logo.png'}),

      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come',
        path: '../../assets/javascript-logo.svg'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
        path: '../../assets/angular-logo.svg', body: 'Submit your resume today!',}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
        path: '../../assets/angular-logo.svg', body: 'Apply today'}),
    ];
  }
}
