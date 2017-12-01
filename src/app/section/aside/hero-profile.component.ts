import { Component, Input }  from '@angular/core';

import { AdComponent }       from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <img src="{{data.path}}">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `,
  styles: ['img {width: 50%;}']
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}
