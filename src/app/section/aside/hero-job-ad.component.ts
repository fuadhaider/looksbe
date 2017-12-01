import { Component, Input } from '@angular/core';

import { AdComponent }      from './ad.component';

@Component({
  template: `
    <div>
      <img src="{{data.path}}">
      <span>Learn</span>
      <span>{{data.name}}</span>
      <span>{{data.description}}</span>
    </div>
  `,
  styles: ['img {width: 4em;}']
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}
