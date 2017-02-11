import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input()
  hero:Hero

  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location) { }

  ngOnInit() {
      this.route.params.switchMap(
          (params: Params) =>  this.heroService.getHero(+params['id'])
      ).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
