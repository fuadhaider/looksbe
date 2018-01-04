import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule }   from '@angular/forms';
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
import { HomeComponent } from './section/main/home/home.component';
import { TrendComponent } from './section/main/trend/trend.component';
import { ExploreComponent } from './section/main/explore/explore.component';
import { ShopComponent } from './section/main/shop/shop.component';
import { MoreComponent } from './section/main/more/more.component';
import { DetailComponent } from './section/main/detail/detail.component';
import { AdDirective } from './section/aside/ad.directive';
import { AdBannerComponent } from './section/aside/ad-banner/ad-banner.component';
import { AdTemplateComponent }   from './section/aside/ad-template.component';
import { LoginNavComponent } from './section/main/login-nav/login-nav.component';
import { SidenavComponent } from './section/main/sidenav/sidenav.component'
import { SignUpComponent } from './section/main/sign-up/sign-up.component';
import { AboutComponent } from './section/main/about/about.component';
import { SearchNavComponent } from './section/main/search-nav/search-nav.component';

import { AdService } from './section/aside/ad.service';
import { DrawerNavService } from './drawer-nav.service';
import { NotificationComponent } from './section/main/notification/notification.component';
import { NotificationService } from './section/main/notification.service';
import { ContentService } from './section/main/content.service';
import { SearchContentComponent } from './section/main/search-content/search-content.component';
import { SearchTermService } from './section/main/search-term.service';
import { LoginDataService } from './section/main/login-data.service';
import { LoginNavSubmitService } from './login-nav-submit.service';
import { CountryService } from './section/main/country.service';

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
    AdTemplateComponent,
    LoginNavComponent,
    SignUpComponent,
    AboutComponent,
    SearchNavComponent,
    SidenavComponent,
    NotificationComponent,
    SearchContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [ContentService, AdService, DrawerNavService, NotificationService,
    SearchTermService, LoginDataService, LoginNavSubmitService, CountryService],
  entryComponents: [ AdTemplateComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
