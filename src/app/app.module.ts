import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeroService} from "./hero.service";

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'heroes',
        component:ListComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },{
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      },{
        path:'detail/:id',
        component:DetailComponent
      }
    ])
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }





