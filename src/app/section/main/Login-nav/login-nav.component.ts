import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

import { DrawerNavService } from '../../../drawer-nav.service';
import { LoginDataService } from '../login-data.service';
// import { LoginNavSubmitService } from '../../../login-nav-submit.service';
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
  // submitted:string = 'false';
  constructor(private drawerNavService: DrawerNavService,
    // private loginDataService: LoginDataService,
    // private loginNavSubmitService: LoginNavSubmitService,
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

  onSubmit() {
  }

  loginAccount() {
    this.router.navigate(['/signup', this.accountLogin.email]);
    this.notificationService.add('Logged In!');
    this.toSignUpPage();
    // this.loginDataService.storeLoginData(this.accountLogin.email);
    // this.submitted = 'true';
    // this.loginNavSubmitService.storeLoginNavSubmit(this.submitted);
    // console.log(this.submitted);
  }

  toSignUpPage() {
    this.drawerNavService.storeDrawerNav('submit');
  }

}
