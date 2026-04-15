import { Pipe, PipeTransform } from "@angular/core";
import { TCountries } from "../pages/countries/country.interface";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(countries: TCountries, query: string) {
    if (!countries?.length) return [];

    const q = (query ?? "").trim();
    if (!q) return countries;

    // Escape user input so special regex chars don't break the pattern
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(escaped, "i"); // "i" = case-insensitive

    return countries.filter(country => re.test(country.name.common));
  }
}
