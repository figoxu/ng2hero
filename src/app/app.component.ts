import { Component } from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers:[HeroService],
})
export class AppComponent {
    title = 'app works!';
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
        this.heroes = this.heroService.getHeroes();
    }
}