import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
  // directives: ['app-login-nav']
})
export class MainComponent implements OnInit {
  @ViewChild('appLoginNav') appLoginNav: ViewContainerRef;

  constructor() { }

  ngOnInit() {
  }

  destroyClick() {
    if (this.appLoginNav) {
      this.appLoginNav.remove();
    }
  }

}
