import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from "../hero";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[HeroService]
})
export class DashboardComponent implements OnInit {

  heroes:Hero[] = [];

  constructor(private heroService:HeroService,
    private router: Router) { }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5))
  }

    goToDetail(hero:Hero){
        this.router.navigate(['/detail', hero.id]);
    }

}
