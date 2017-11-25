import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './section/main/home/home.component';
import { TrendComponent } from './section/main/trend/trend.component';
import { ExploreComponent } from './section/main/explore/explore.component';
import { ShopComponent } from './section/main/shop/shop.component';
import { DetailComponent } from './section/main/detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trend', component: TrendComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'shop', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
