import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";
import { TCountries } from "./country.interface";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private countriesResponse = signal<TCountries>([]);
  public readonly countries = this.countriesResponse;

  constructor(private http: HttpClient) {
    this.getCountriesNames().subscribe(response => {
      this.countries.set(response);
    });
  }

  getCountriesNames() {
    return this.http.get<TCountries>(`${environment.apiUrl}/all?fields=name,region`);
  }

  getCountry(countryName: string) {
    return this.http
      .get<TCountries>(`${environment.apiUrl}/name/${countryName}?fullText=true`)
      .pipe(
        map(response => {
          const country = { ...response[0], languages: Object.values(response[0].languages) };
          return country;
        })
      );
  }
}
