import { Component, Input } from '@angular/core';

import { AdComponent }      from './ad.component';

@Component({
  template: `
    <div>
      <span>Learn</span>
      <span>{{data.ad}}</span>
      <a href="{{data.link1}}" target="_blank"><img src="{{data.path1}}"></a>
      <span>{{data.item1}}</span>
      <a href="{{data.link2}}" target="_blank"><img src="{{data.path2}}"></a>
      <span>{{data.item2}}</span>
      <a href="{{data.link3}}" target="_blank"><img src="{{data.path3}}"></a>
      <span>{{data.item3}}</span>
    </div>
  `,
  styles: [`
    img { width: 15vmin;}
    @media all and (max-width: 768px) {
      span { display:none; }
    }
  `]
})
export class AdTemplateComponent implements AdComponent {
  @Input() data: any;

}
