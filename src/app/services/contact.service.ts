//SERVICE THAT CONTAINS CONTACT-INFO OF THE THREE DEVS

import {Injectable} from "@angular/core";
import {ContactModel} from "../model/contact.model";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ContactService{
  contacts: ContactModel[]= [
    {

      id:0,
      lastName:'Mamadou',
      firstName: 'Barry',
      phone: 145,
      photoUrl:'assets/contacts/Mamadou.jpg',
      email:'siradio156@gmail.com'
    },

    {
      id:1,
      lastName:'Nguemnang',
      firstName: 'Naomie',
      phone: 4917671611464,
      photoUrl:'assets/contacts/Naomie.jpg',
      email:'naomienguemnang@gmail.com'

    },

    {
      id:2,
      lastName:'Linemann',
      firstName: 'Anton',
      phone: 33749495028,
      photoUrl:'assets/contacts/Anton.jpg',
      email:'anton.linemann@hotmail.com'
    }

  ];

  getAllContact():ContactModel[]{
    return this.contacts;
  }
}
