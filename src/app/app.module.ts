import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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

      InMemoryWebApiModule.forRoot(InMemoryDataService),
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





