import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Country } from './country';
import { ContactForm } from './forms';
import { COUNTRY } from './mocks';

@Component({
  selector: 'app-contact-form', // padre-hijo
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  countryList: Country[] = COUNTRY;
  contact: ContactForm;
  constructor() { }

  ngOnInit(): void {
    this.contact = new ContactForm(
      "Jose Carlos",
      "Ramirez Tello",
      "jcramirez@gmail.com",
      "male",
      false,
      1,
      "Lima",
      "Calle ABCD Prueba 500",
      "2005"
    )
  }

  onSubmit(contactForm: NgForm): void {
    console.log(contactForm.value);
  }

}
