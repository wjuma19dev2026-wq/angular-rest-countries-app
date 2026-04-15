import { Component, inject, OnInit, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CountryService } from "./country.service";
import { SearchPipe } from "../../pipes/search.pipe";
import { SearchService } from "../../search/search.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-countries",
  imports: [RouterLink, SearchPipe],
  templateUrl: "./countries.html",
  styleUrl: "./countries.css",
})
export class Countries implements OnInit {
  countries = inject(CountryService).countries;
  query = signal<string>("");
  searchSubscription!: Subscription;

  constructor(private searchSvs: SearchService) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchSvs.onInputSubmitValue.subscribe(searchText => {
      this.query.set(searchText);
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
