import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { SearchService } from "./search.service";

@Component({
  selector: "app-search",
  imports: [FormsModule],
  templateUrl: "./search.html",
  styleUrl: "./search.css",
})
export class Search {
  constructor(private searchSvs: SearchService) {}

  onSubmit(form: NgForm) {
    this.searchSvs.onInputSubmitValue.next(form.value["search"]);
  }
}
