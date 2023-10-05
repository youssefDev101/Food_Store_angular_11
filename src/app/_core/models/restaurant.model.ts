export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Menu {
  figure: string;
}

export interface SocialMedia {
  website: string;
  facebook: string;
  intagram: string;
  telegram: string;
  whatup: string;
}

export interface Restaurant {
  id: number;
  title: string;
  img: string;
  category: number;
  underCategory: string[];
  delivery: string[];
  address: Address;
  phone: string;
  description: string;
  menu: Menu[];
  socialMedia: SocialMedia;
}
