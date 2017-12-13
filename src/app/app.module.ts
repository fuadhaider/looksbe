import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { NavComponent } from './section/nav/nav.component';
import { MainComponent } from './section/main/main.component';
import { AsideComponent } from './section/aside/aside.component';
import { ContentService } from './section/main/content.service';
import { HomeComponent } from './section/main/home/home.component';
import { TrendComponent } from './section/main/trend/trend.component';
import { ExploreComponent } from './section/main/explore/explore.component';
import { ShopComponent } from './section/main/shop/shop.component';
import { MoreComponent } from './section/main/more/more.component';
import { DetailComponent } from './section/main/detail/detail.component';
import { AdDirective } from './section/aside/ad.directive';
import { AdBannerComponent } from './section/aside/ad-banner/ad-banner.component';
import { WebDesignComponent }   from './section/aside/web-design.component';
import { FrontEndDevComponent } from './section/aside/front-end-dev.component';
import { BackEndDevComponent } from './section/aside/back-end-dev.component';
import { SoftDevComponent } from './section/aside/soft-dev.component';
import { AdService } from './section/aside/ad.service';
import { SidenavComponent } from './section/main/sidenav/sidenav.component';
import { HeaderNavService } from './section/main/header-nav.service';
import { TopnavComponent } from './section/main/topnav/topnav.component';
import { HeaderTopnavService } from './section/main/header-topnav.service';
import { SignUpComponent } from './section/main/sign-up/sign-up.component';
import { AboutComponent } from './section/main/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    NavComponent,
    MainComponent,
    AsideComponent,
    HomeComponent,
    TrendComponent,
    ExploreComponent,
    ShopComponent,
    MoreComponent,
    DetailComponent,
    AdDirective,
    AdBannerComponent,
    WebDesignComponent,
    FrontEndDevComponent,
    BackEndDevComponent,
    SoftDevComponent,
    SidenavComponent,
    TopnavComponent,
    SignUpComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [ContentService, AdService, HeaderNavService, HeaderTopnavService ],
  entryComponents: [ WebDesignComponent, FrontEndDevComponent, BackEndDevComponent, SoftDevComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
