import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  // @Output() contactWasSelected = new E ventEmitter<Contacts>();

  contacts:Contacts[] = [];

  // onContactSelected(contact: Contacts){
  //   this.contactWasSelected.emit(contact);
  // }

  constructor(private contactService: ContactService){

  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
