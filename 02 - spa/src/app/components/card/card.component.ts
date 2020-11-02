import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Hero, HeroesService } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() hero: Hero;
  @Output() _showHero = new EventEmitter<string>();

  constructor(private heroesService: HeroesService, private _router: Router) {
  }

  ngOnInit() {}

  showHero() {
    this._showHero.emit(this.hero.id);
  }
}
