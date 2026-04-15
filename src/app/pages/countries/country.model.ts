import { signal } from "@angular/core";

const countriesArr = signal<Country[]>([]);

export class Country {
  constructor(
    public capital: string[],
    public region: string,
    public subregion: string,
    public borders: string[],
    public area: number,
    public population: number,
    public continents: string[],
    public name: { common: string },
    // public languages: { [key: string]: string },
    public languages: string[],
    public flags: {
      png: string;
      alt: string;
      svg: string;
    },
    public latlng: number[]
  ) {}

  public save() {
    countriesArr.update(actualCountries => [...actualCountries, this]);
  }

  static readonly countries = countriesArr;
}
