export interface ICountriesName {
  name: {
    common: string;
  };
  region: string;
}

export type TCountries = ICountry[];

export interface ICountry {
  tld: any[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  landlocked: boolean;
  borders: string[];
  area: number;
  maps: Maps;
  population: number;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flag: string;
  name: Name;
  currencies: Currencies;
  languages: Languages;
  latlng: number[];
  demonyms: Demonyms;
  translations: Translations;
  gini: Gini;
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Name {
  common: string;
}

export interface Currencies {}

export interface Languages {}

export interface Demonyms {}

export interface Translations {}

export interface Gini {}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface CoatOfArms {}

export interface CapitalInfo {}

export interface PostalCode {}
