import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
