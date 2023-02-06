import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';
import { Contacts } from '../../contacts.model';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})


export class ContactItemComponent {
  @Input() contact: Contacts;

  constructor(private contactService: ContactService){ }

  ngOnInit(){

  }
  

  onSelected(){
    this.contactService.contactSelected.emit(this.contact);
  }
}
