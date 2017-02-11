import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[HeroService],
})
export class ListComponent implements OnInit {
  heroes: Hero[];
  selectedHero:Hero;

  constructor(private heroService:HeroService){}


  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero): void {
    console.log("@hero:",hero)
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

}
