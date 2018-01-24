import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { AccountDetail } from '../account-detail';
import { PersonalDetail } from '../personal-detail';
import { ContactDetail } from '../contact-detail';
import { CountryObject } from '../country-object';

import { NotificationService } from '../notification.service';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  accountDetailSubmitted: boolean = false;
  accountDetail = new AccountDetail('','','');
  mismatch: boolean = false;
  user: string;
  personalDetailSubmitted = false;
  personalDetail = new PersonalDetail('','', undefined ,'');
  startDob = new Date(2005, 0, 1);
  // showDate: string;
  // eventDate: MatDatepickerInputEvent<Date>;
  // events: string[] = [];
  maxDate = new Date(Date.now() - 4748 * 24 * 60 * 60 * 1000); //13 years and older
  minDate = new Date(Date.now() - 36525 * 24 * 60 * 60 * 1000); //100 years and younger
  contactDetailSubmitted = false;
  contactDetail = new ContactDetail('','','','','','','','','',undefined,undefined);
  countryArray: CountryObject[];
  typingKey: boolean = false;

  constructor(
    private notificationService: NotificationService,
    private countryService: CountryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.notificationService.add('Visited: Sign Up!');
    this.user = this.route.snapshot.paramMap.get('user');
    if (this.user) {
      this.accountDetailSubmitted = true;
      this.accountDetail.email = this.user;
    }
  }

  submitAccountDetail(password: string, confirm: string) {
    this.accountDetailSubmitted = true;
    this.notificationService.add('Submitted: Account Detail!');
    if (password == confirm) {
      this.mismatch = false;
    }
    else {
      this.mismatch = true;
    }
  }

  newAccountDetail() {
    this.accountDetail = new AccountDetail('','','');
  }

  submitPersonalDetail() {
    this.personalDetailSubmitted = true;
    this.notificationService.add('Submitted: Personal Detail!');
  }

  newPersonalDetail() {
    this.personalDetail = new PersonalDetail('','',undefined,'');
  }

  // dateOnly(dateNoTime: Date) {
  //   this.showDate = dateNoTime.toDateString();
  // }

  // showingDate(event: MatDatepickerInputEvent<Date>) {
  //   this.events.push('${event.value}')
  // }

  submitContactDetail() {
    this.contactDetailSubmitted = true;
    this.notificationService.add('Submitted: Contact Detail!');
  }

  newContactDetail() {
    this.contactDetail = new ContactDetail('','','','','','','','','',undefined,undefined);
  }

  searchCountry(letter: string) {
    this.countryService.sendCountry(letter).subscribe(countryArray =>
    this.countryArray = countryArray);
  }
}
