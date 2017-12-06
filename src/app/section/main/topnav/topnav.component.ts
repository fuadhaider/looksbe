import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  animations: [
    trigger('topnavToggle', [
      state('in', style({
        // transform: 'scale(1)'
        height: 0,
        opacity: 0,
        display: 'none'
      })),
      state('out', style({
        // transform: 'scale(2)'
        height: '2em',
        opacity: 1,
        display: 'block'
      })),
      transition('in <=> out', animate('200ms ease-in-out'))
    ])
  ]
})
export class TopnavComponent {
  topnavState: string = 'out';
  constructor() { }

  toggleTopnav() {
    this.topnavState = (this.topnavState === 'out' ? 'in' : 'out');
  }
}
