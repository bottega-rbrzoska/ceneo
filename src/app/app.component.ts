import { Component } from '@angular/core';
import { CeneoAddress } from './models/ceneo-address.interface';
import { Contact } from './models/contact.interface';

@Component({
  selector: 'ce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ceneo';
  contact: Contact = {
    firstName: 'Alojzy',
    lastName: 'Ciurlok',
    address: { country: 'Polska' }
  };

  changeLastName(newName: string) {
    this.contact = { ...this.contact, lastName: newName };
  }
}
