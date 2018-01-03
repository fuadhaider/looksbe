import { Injectable }           from '@angular/core';

import { AdTemplateComponent }   from './ad-template.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(AdTemplateComponent, {ad: 'Web Design',
        item1: 'Photoshop CS6',
        path1: './assets/photoshop-logo.png',
        link1: 'https://www.adobe.com/uk/products/photoshop.html',
        item2: 'Illustrator CS6',
        path2: './assets/illustrator-logo.png',
        link2: 'https://www.adobe.com/uk/products/illustrator.html',
        item3: 'Google Web Designer',
        path3: './assets/google-web-designer-logo.png',
        link3: 'https://www.google.co.uk/webdesigner/'
      }),
      new AdItem(AdTemplateComponent, {ad: 'Front End',
        item1: 'HTML5',
        path1: './assets/html5-logo.png',
        link1: 'https://www.w3.org/html/',
        item2: 'CSS3',
        path2: './assets/css3-logo.png',
        link2: 'https://www.w3.org/Style/CSS/Overview.en.html',
        item3: 'JavaScript',
        path3: './assets/javascript-logo.png',
        link3: 'https://www.javascript.com/'
      }),
      new AdItem(AdTemplateComponent, {ad: 'Back End',
        item1: 'PHP 5',
        path1: './assets/php-logo.png',
        link1: 'https://secure.php.net/',
        item2: 'C Sharp',
        path2: './assets/c-sharp-logo.png',
        link2: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
        item3: 'MySQL',
        path3: './assets/mysql-logo.png',
        link3: 'https://www.mysql.com/'
      }),
      new AdItem(AdTemplateComponent, {ad: 'Extras',
        item1: 'Angular',
        path1: './assets/angular-logo.png',
        link1: 'https://angular.io/',
        item2: 'GitHub',
        path2: './assets/github-logo.png',
        link2: 'https://github.com/',
        item3: 'Drupal 7',
        path3: './assets/drupal-logo.png',
        link3: 'https://www.drupal.org/'
      }),
    ];
  }
}
