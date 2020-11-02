import { Routes } from "@angular/router";
import { HomeComponent } from "../app/components/home/home.component";
import { ArtistComponent } from "../app/components/artist/artist.component";
import { SearchComponent } from "../app/components/search/search.component";
import { NavbarComponent } from "../app/components/shared/navbar/navbar.component";

export const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "artist", component: ArtistComponent },
  { path: "search", component: SearchComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "**", pathMatch: "full", component: HomeComponent }
];