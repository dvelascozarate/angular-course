import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Hero } from "../../services/heroes.service";
import { Location } from '@angular/common';


@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html"
})
export class HeroComponent implements OnInit {
  hero: Hero;
  public bMarvel: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private _location: Location
  ) {
    activatedRoute.params.subscribe(
      params => (this.hero = heroesService.getHero(params["name"]))
    );
  }

  ngOnInit() {
    this.bMarvel = this.hero.casa == "Marvel"
  }

  LocationBack(){
    this._location.back();
  }
}
