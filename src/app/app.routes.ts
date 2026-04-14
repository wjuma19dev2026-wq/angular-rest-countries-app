import { Routes } from "@angular/router";
import { Countries } from "./pages/countries/countries";
import { Favorites } from "./pages/favorites/favorites";
import { PageNotFound } from "./pages/page-not-found/page-not-found";

export const routes: Routes = [
  { path: "", redirectTo: "countries", pathMatch: "full" },
  { path: "countries", component: Countries },
  { path: "favorites", component: Favorites },
  { path: "**", component: PageNotFound },
];
