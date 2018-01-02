import { Component, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';

// import { LoginNavSubmitService } from '../../login-nav-submit.service';
// , ViewChild
// import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
  // directives: ['app-login-nav']
})
export class MainComponent implements OnInit {
  // @ViewChild('appLoginNav') appLoginNav: ViewContainerRef;
  // destroy: string = 'false';
  constructor() { }
    // private loginNavSubmitService: LoginNavSubmitService
  ngOnInit() {
    // console.log('initial');
    // this.loginNavSubmitService.sendLoginNavSubmit().subscribe(submit => {
      // if(submit == true) {
        // this.destroy = submit;
        // console.log(submit);
        // console.log(this.destroy);
      // }
    // })
  }

  // destroyClick() {
  //   if (this.appLoginNav) {
  //     this.appLoginNav.remove();
  //   }
  // }

}
