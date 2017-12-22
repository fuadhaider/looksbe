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
  accountDetailSubmitted = false;
  accountDetail = new Account('','','');
  personalDetail = new PersonalDetail('','', 0 ,'');
  contactDetail = new ContactDetail('','','','','','','','',0,0);
  personalDetailSubmitted = false;
  contactDetailSubmitted = false;

  constructor() { }

  ngOnInit() {
  }

  submitAccountDetail() {
    this.accountDetailSubmitted = true;
    console.log(this.accountDetailSubmitted);
  }

  newAccountDetail() {
    this.accountDetail = new Account('','','');
  }

  submitPersonalDetail() {
    this.personalDetailSubmitted = true;
  }

  newPersonalDetail() {
    this.personalDetail = new PersonalDetail('','',0,'');
  }

  sumbitContactDetail() {
    this.contactDetailSubmitted = true;
  }

  newContactDetail() {
    this.contactDetail = new ContactDetail('','','','','','','','',0,0);
  }

}
