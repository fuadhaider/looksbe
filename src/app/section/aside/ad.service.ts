import { Injectable }           from '@angular/core';

import { AdTemplateComponent }   from './ad-template.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(AdTemplateComponent, {name: 'Web Design',
        // description: 'For beautiful websites',
        path1: './assets/photoshop-logo.png',
        link1: 'https://www.adobe.com/uk/products/photoshop.html',
        path2: './assets/illustrator-logo.png',
        link2: 'https://www.adobe.com/uk/products/illustrator.html',
        path3: './assets/google-web-designer-logo.png',
        link3: 'https://www.google.co.uk/webdesigner/'
      }),
      new AdItem(AdTemplateComponent, {name: 'Front End',
        // description: 'Only names for web face',
        path1: './assets/html5-logo.png',
        link1: 'https://www.w3.org/html/',
        path2: './assets/css3-logo.png',
        link2: 'https://www.w3.org/Style/CSS/Overview.en.html',
        path3: './assets/javascript-logo.png',
        link3: 'https://www.javascript.com/'
      }),
      new AdItem(AdTemplateComponent, {name: 'Back End',
        // description: 'The scene behind the curtain',
        path1: './assets/php-logo.png',
        link1: 'https://secure.php.net/',
        path2: './assets/c-sharp-logo.png',
        link2: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
        path3: './assets/mysql-logo.png',
        link3: 'https://www.mysql.com/'
      }),
      new AdItem(AdTemplateComponent, {name: 'Extras',
        // description: 'Most popular tools',
        path1: './assets/angular-logo.png',
        link1: 'https://angular.io/',
        path2: './assets/github-logo.png',
        link2: 'https://github.com/',
        path3: './assets/drupal-logo.png',
        link3: 'https://www.drupal.org/'
      }),
    ];
  }
}
