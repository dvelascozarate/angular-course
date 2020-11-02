import { Component, OnInit } from "@angular/core";
import { HeroesService, Hero } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: []
})
export class HeroesComponent implements OnInit {
  constructor(private _heroesService: HeroesService, private _router: Router) {}

  public heroes: Hero[];

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }
  showHero(id : string) {
    this._router.navigate(["/hero", id]);
  }
}
