import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

import { AccountDetail } from '../account-detail';

import { DrawerNavService } from '../../../drawer-nav.service';
import { NotificationService } from '../notification.service';

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
  loginNavState: string = 'in';
  accountLogin = new AccountDetail('','');
  constructor(private drawerNavService: DrawerNavService,
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit() {
    this.drawerNavService.getDrawerNav().subscribe(which => {
      if ( which == 'login' ) {
        this.loginNavState = (this.loginNavState === 'in' ? 'out' : 'in');
      }
      else if ( which == 'sidenav' ) {
        this.loginNavState = this.loginNavState;
      }
      else {
        this.loginNavState = 'in';
      }
    })
  }

  loginAccount() {
    this.router.navigate(['/signup', this.accountLogin.email]);
    this.notificationService.add('Logged In!');
    this.toSignUpPage();
  }

  toSignUpPage() {
    this.drawerNavService.storeDrawerNav('submit');
  }

}
