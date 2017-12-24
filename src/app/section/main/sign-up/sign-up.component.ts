import { Component, OnInit } from '@angular/core';

import { Account } from '../../../account';
import { PersonalDetail } from '../../../personal-detail';
import { ContactDetail } from '../../../contact-detail';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  panelOpenState: boolean = false;
  accountDetailSubmitted: boolean = false;
  accountDetail = new Account('','','');
  personalDetailSubmitted = false;
  personalDetail = new PersonalDetail('','', undefined ,'');
  contactDetailSubmitted = false;
  contactDetail = new ContactDetail('','','','','','','','','',undefined,undefined);

  constructor() { }

  ngOnInit() {
  }

  submitAccountDetail() {
    this.accountDetailSubmitted = true;
  }

  newAccountDetail() {
    this.accountDetail = new Account('','','');
  }

  submitPersonalDetail() {
    this.personalDetailSubmitted = true;
  }

  newPersonalDetail() {
    this.personalDetail = new PersonalDetail('','',undefined,'');
  }

  submitContactDetail() {
    this.contactDetailSubmitted = true;
  }

  newContactDetail() {
    this.contactDetail = new ContactDetail('','','','','','','','','',undefined,undefined);
  }

}
