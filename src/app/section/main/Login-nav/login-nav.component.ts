import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

import { DrawerNavService } from '../../../drawer-nav.service';
import { LoginDataService } from '../login-data.service';
import { NotificationService } from '../notification.service';
import { Account } from '../../../account';

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
  accountLogin = new Account('','');
  // submitted = false;

  constructor(private drawerNavService: DrawerNavService,
    private loginDataService: LoginDataService,
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit() {
    this.drawerNavService.getDrawerNav().subscribe(which => {
      if ( which == 'login') {
        this.loginNavState = (this.loginNavState === 'in' ? 'out' : 'in');
      }
      else {
        this.loginNavState = 'in';
      }
    })
  }

  onSubmit() {
    // this.submitted = true;
    // console.log(this.accountLogin.email,this.accountLogin.password);
  }

  loginAccount() {
    // this.accountLogin = new Account('','');
    // console.log(this.accountLogin.email,this.accountLogin.password);
    this.router.navigate(['/signup']);
    this.notificationService.add('Logged In!');
    this.loginDataService.storeLoginData(this.accountLogin.email);

  }

}
