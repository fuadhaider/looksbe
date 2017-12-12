import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { HeaderTopnavService } from '../header-topnav.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  animations: [
    trigger('topnavToggle', [
      state('in', style({
        // transform: 'scale(1)'
        // height: 0,
        opacity: 0,
        display: 'none'
      })),
      state('out', style({
        // transform: 'scale(2)'
        // height: '2em',
        opacity: 1,
        display: 'block'
      })),
      transition('in <=> out', animate('200ms ease-in-out'))
    ])
  ]
})
export class TopnavComponent implements OnInit {
  topnavState: string = 'in';
  subscription: Subscription;
  public bool: boolean = null;

  constructor(private headerTopnavService: HeaderTopnavService) { }

  ngOnInit() {
    this.subscription = this.headerTopnavService.toggleTopnav().subscribe(which => {
      console.log(which);
      if (which='login') {
        this.bool = true;
      }
      else {
        this.bool = false;
      }
      this.toggleTopnav();
    })
  }

  toggleTopnav() {
    this.topnavState = (this.topnavState === 'in' ? 'out' : 'in');
  }
}
