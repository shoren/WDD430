import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from './contact.service';
import { Contacts } from './contacts.model';

import { Subscription} from "rxjs"

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent  implements OnInit, OnDestroy {
  selectedContact: Contacts;
  title = 'cms';

  contact: Contacts[];
  private conChangedSub: Subscription;

  constructor(private contactService: ContactService){ }


  onContactAdded(contact: Contacts){
    this.contact.push(contact);
  }

  ngOnInit(){
    this.contact = this.contactService.getContacts();
    this.conChangedSub = this.contactService.contactListChangedEvent
    .subscribe(
      (contact: Contacts[]) => {
        this.contact = contact;
      }
    );
  }

  ngOnDestroy(): void {
    this.conChangedSub.unsubscribe();
  }
}