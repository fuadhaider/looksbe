import { Component, Input } from '@angular/core';

import { AdComponent }      from './ad.component';

@Component({
  template: `
    <div class="job-ad">
      <img src="{{data.path}}">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `,
  styles: ['img {width: 50%;}']
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}
