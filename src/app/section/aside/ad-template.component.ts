import { Component, Input } from '@angular/core';

import { AdComponent }      from './ad.component';

@Component({
  template: `
    <div>Learn</div>
    <div>{{data.ad}}</div>
    <a href="{{data.link1}}" target="_blank"><img src="{{data.path1}}"></a>
    <div>{{data.item1}}</div>
    <a href="{{data.link2}}" target="_blank"><img src="{{data.path2}}"></a>
    <div>{{data.item2}}</div>
    <a href="{{data.link3}}" target="_blank"><img src="{{data.path3}}"></a>
    <div>{{data.item3}}</div>
  `,
  styles: [`
    img { width: 15vmin;}
    @media all and (max-width: 768px) {
      div { display:none; }
    }
  `]
})
export class AdTemplateComponent implements AdComponent {
  @Input() data: any;

}
