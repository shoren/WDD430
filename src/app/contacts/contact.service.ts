import {EventEmitter, Injectable} from '@angular/core';
import {Contacts} from './contacts.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactSelected = new EventEmitter<Contacts>();

   private contacts: Contacts [] =[];

   constructor() {
      this.contacts = MOCKCONTACTS;
   }

   getContacts(): Contacts[]{
    return this.contacts.slice();
   }


   getContact(id: string) : Contacts{
    for (const contact of this.contacts) {
      if(contact.id == id) {
         return contact;
      }
    }
    return null as any;
  }


}

