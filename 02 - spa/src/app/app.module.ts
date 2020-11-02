import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//Rutas
import { APP_ROUTING } from "./app.routes";

//Servicios
import { HeroesService } from './services/heroes.service';
import { HeroComponent } from './components/hero/hero.component';
import { HeroesSearchComponent } from './components/heroes-search/heroes-search.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    HeroesSearchComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
