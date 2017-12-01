import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem }               from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'HTML5',
        description: 'One and only web Templating',
        path: '../../assets/HTML5.png'}),

      new AdItem(HeroProfileComponent, {name: 'CSS3',
        description: 'Only name for WebStyling',
        path: '../../assets/css3.png'}),

      new AdItem(HeroJobAdComponent, {name: 'JavaScript',
        description: 'Scripting guru',
        path: '../../assets/javascript.png',}),

      new AdItem(HeroJobAdComponent, {name: 'Angular',
        description: 'Most popular Framework!',
        path: '../../assets/angular.png',})
    ];
  }
}
