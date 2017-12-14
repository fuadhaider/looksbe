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
        opacity: 0,
        display: 'none'
      })),
      state('out', style({
        opacity: 1,
        display: 'block'
      })),
      transition('in => out', animate('200ms ease-in')),
      transition('out => in', animate('0ms'))

    ])
  ]
})
export class LoginNavComponent implements OnInit {
  subscription: Subscription;
  loginNavState: string = 'in';

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
