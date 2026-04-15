import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";
import { CountryService } from "../countries/country.service";
import { CurrencyPipe } from "@angular/common";
import { ICountry } from "../countries/country.interface";

@Component({
  selector: "app-details",
  imports: [CurrencyPipe],
  templateUrl: "./details.html",
  styleUrl: "./details.css",
})
export class Details implements OnInit {
  public country!: ICountry;

  constructor(
    private route: ActivatedRoute,
    private countrySvs: CountryService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const countryName = params.get("countryName");
      if (countryName) {
        this.countrySvs.getCountry(countryName).subscribe(country => {
          this.country = country;
          this.cd.detectChanges();
        });
      }
    });
  }
}
