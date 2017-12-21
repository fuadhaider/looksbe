import { Component, OnInit } from '@angular/core';

import { Logon } from '../../../logon';
import { PersonalDetail } from '../../../personal-detail';
import { ContactDetail } from '../../../contact-detail';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  panelOpenState: boolean = false;
  account = new Logon('','','');
  personalDetail = new PersonalDetail('','', 0 ,'');
  contactDetail = new ContactDetail('','','','','','','','',0,0);
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  newAccount() {
    this.account = new Logon('','','');
  }

  newPersonal() {
    this.personalDetail = new PersonalDetail('','',0,'');
  }

  newContactDetail() {
    this.contactDetail = new ContactDetail('','','','','','','','',0,0);
  }

  get diagnostic() { return JSON.stringify(this.account); }

}
