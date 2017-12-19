import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './section/main/home/home.component';
import { TrendComponent } from './section/main/trend/trend.component';
import { ExploreComponent } from './section/main/explore/explore.component';
import { ShopComponent } from './section/main/shop/shop.component';
import { DetailComponent } from './section/main/detail/detail.component';
import { SignUpComponent } from './section/main/sign-up/sign-up.component';
import { AboutComponent } from './section/main/about/about.component';
import { SearchContentComponent } from './section/main/search-content/search-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trend', component: TrendComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search/:term', component: SearchContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
