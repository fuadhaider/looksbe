import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { DrawerNavService } from '../../../drawer-nav.service';

@Component({
  selector: 'app-login-nav',
  templateUrl: './login-nav.component.html',
  styleUrls: ['./login-nav.component.scss'],
  animations: [
    trigger('loginNavToggle', [
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
export class LoginNavComponent implements OnInit {
  loginNavState: string = 'in';
  subscription: Subscription;
  constructor(private drawerNavService: DrawerNavService) { }

  ngOnInit() {
    this.subscription = this.drawerNavService.getDrawerNav().subscribe(which => {
      if ( which == 'login') {
        this.loginNavState = (this.loginNavState === 'in' ? 'out' : 'in');
      }
      else {
        this.loginNavState = 'in';
      }
    })
  }

}
