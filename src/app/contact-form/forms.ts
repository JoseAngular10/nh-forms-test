import { Country } from './country';
import { COUNTRY } from './mocks';

export interface Address {
  city: string;
  street: string;
  pincode: string;
}

export class ContactForm {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: Country;
  address: Address;

  constructor(firstname: string,
    lastname: string,
    email: string,
    gender: string,
    isMarried: boolean,
    country: number,
    city: string,
    street: string,
    pincode: string) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.gender = gender;
      this.isMarried = isMarried;
      this.country = this.findCountry(country);
      this.address = {
        city,
        street,
        pincode
      }
    }

    findCountry(id: number): Country {
      return COUNTRY.find( country => country.id === id);
    }
}