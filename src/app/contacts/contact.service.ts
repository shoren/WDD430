import {EventEmitter, Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {Contacts} from './contacts.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactSelected = new EventEmitter<Contacts>();
  contactListChangedEvent: Subject<Contacts[]> = new Subject<Contacts[]>();

   private contacts: Contacts [] =[];
   maxContactId: number;

   getMaxId(): number {
    let maxId = 0
    
    for(const contact of this.contacts){
      const currentId = parseInt(contact.id);
      if(currentId >  maxId){
        maxId = currentId;
      }
    }
    return maxId;
}

   constructor() {
      this.contacts = MOCKCONTACTS;
   }

   getContacts(): Contacts[]{
    return this.contacts.slice();
   }

  getContact(id: string) : Contacts {
    for (let contact of this.contacts) {
      if(contact.id == id) {
         return contact;
      }
    }
    return null as any;
  }

  getAContact(id: number){
    return this.contacts[id];
  }


  addContact(newContact:Contacts){
    if(!newContact){
      return;
    }

    this.maxContactId++;
    newContact.id = String(this.maxContactId);

    this.contacts.push(newContact);
    const documentsListClone = this.contacts.slice();

    this.contactListChangedEvent.next(documentsListClone);
  }
  

  updateContact(originalContact: Contacts, newContact: Contacts){
    if(!originalContact || !newContact){
      return;
    }

    let pos = this.contacts.indexOf(originalContact)
    if(pos < 0 ){
      return;
    }

    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    let contactsListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactsListClone);
   }


   deleteContact(contact: Contacts){
    if(!contact){
      return;
    }

    let pos = this.contacts.indexOf(contact)
    if(pos < 0){
      return;
    }
    this.contacts.splice(pos,1);
    let contactListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactListClone)

   }
}


