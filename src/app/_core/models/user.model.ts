export class Geo {
  lat?: number;
  lng?: number;
}
export class User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  adresse?: string;
  city?: string;
  geoLocation?: Geo;
  constructor(
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    adresse: string,
    city: string,
    geoLocation: Geo
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.adresse = adresse;
    this.city = city;
    this.geoLocation = geoLocation;
  }
}
