import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './section/main/home/home.component';
import { TrendComponent } from './section/main/trend/trend.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'trend', component: TrendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
