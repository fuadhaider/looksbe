import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Account } from '../../../account';
import { PersonalDetail } from '../../../personal-detail';
import { ContactDetail } from '../../../contact-detail';
// import { LoginDataService } from '../login-data.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  panelOpenState: boolean = false;
  accountDetailSubmitted: boolean = false;
  accountDetail = new Account('','','');
  user: string;
  personalDetailSubmitted = false;
  personalDetail = new PersonalDetail('','', undefined ,'');
  contactDetailSubmitted = false;
  contactDetail = new ContactDetail('','','','','','','','','',undefined,undefined);

  constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute) { }
// private loginDataService: LoginDataService,
  ngOnInit() {
    this.notificationService.add('Visited: Sign Up!');
    // this.loginDataService.sendLoginData().subscribe(data => {
    //   this.accountDetailSubmitted = true;
    //   this.accountDetail.email = data;
    // })
    this.user = this.route.snapshot.paramMap.get('user');
    if (this.user) {
      this.accountDetailSubmitted = true;
      this.accountDetail.email = this.user;
    }
  }

  submitAccountDetail() {
    this.accountDetailSubmitted = true;
    this.notificationService.add('Submitted: Account Detail!');
  }

  newAccountDetail() {
    this.accountDetail = new Account('','','');
  }

  submitPersonalDetail() {
    this.personalDetailSubmitted = true;
    this.notificationService.add('Submitted: Personal Detail!');
  }

  newPersonalDetail() {
    this.personalDetail = new PersonalDetail('','',undefined,'');
  }

  submitContactDetail() {
    this.contactDetailSubmitted = true;
    this.notificationService.add('Submitted: Contact Detail!');
  }

  newContactDetail() {
    this.contactDetail = new ContactDetail('','','','','','','','','',undefined,undefined);
  }

}
