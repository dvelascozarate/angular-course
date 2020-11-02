import { Component, OnInit, OnDestroy} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Hero } from "../../services/heroes.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-heroes-search",
  templateUrl: "./heroes-search.component.html",
  styleUrls: ["./heroes-search.component.css"]
})
export class HeroesSearchComponent implements OnInit {
  heroes: Hero[];
  condition : string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private _router : Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => (this.condition = params["condition"])
    );
    this.heroes = this.heroesService.searchHeroes(this.condition);
  }
  showHero(id : number){
    this._router.navigate(['/hero', id ])
  }
}
