import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contacts } from './contacts.model';

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent {
  selectedContact: Contacts;
  title = 'cms';

  constructor(private contactService: ContactService){ }

  ngOnInit(){
    this.contactService.contactSelected
    .subscribe(
      (contact: Contacts) => {
        this.selectedContact = contact;
      }
    );
  }
}