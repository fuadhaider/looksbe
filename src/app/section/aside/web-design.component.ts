import { Component, Input } from '@angular/core';

import { AdComponent }      from './ad.component';

@Component({
  template: `
    <div>
      <a href="{{data.link1}}" target="_blank"><img src="{{data.path1}}"></a>
      <a href="{{data.link2}}" target="_blank"><img src="{{data.path2}}"></a>
      <a href="{{data.link3}}" target="_blank"><img src="{{data.path3}}"></a>
      <span>Learn</span>
      <span>{{data.name}}</span>
    </div>
  `,
  styles: ['img {width: 8vw;}']
})
export class WebDesignComponent implements AdComponent {
  @Input() data: any;

}
