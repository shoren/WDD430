import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute){

  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  OnNewContact(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
