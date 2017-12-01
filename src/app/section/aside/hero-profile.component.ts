import { Component, Input }  from '@angular/core';

import { AdComponent }       from './ad.component';

@Component({
  template: `
    <div>
      <img src="{{data.path}}">
      <span>Learn
      {{data.name}}
      {{data.description}}</span>
    </div>
  `,
  styles: ['img {width: 4em;}']
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}
