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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    NavComponent,
    MainComponent,
    AsideComponent,
    HomeComponent,
    TrendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
