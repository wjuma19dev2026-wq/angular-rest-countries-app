import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Navbar } from "./navbar/navbar";
import { SearchService } from "./search/search.service";
import { Subscription } from "rxjs";
import { Footer } from "./footer/footer";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App implements OnInit, OnDestroy {
  constructor(private searchSvs: SearchService) {}
  searchSubscription!: Subscription;

  ngOnInit(): void {
    this.searchSubscription = this.searchSvs.onInputSubmitValue.subscribe(searchText => {
      console.log(searchText);
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
