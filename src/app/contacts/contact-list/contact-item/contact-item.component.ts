import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Contacts } from '../../contacts.model';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})


export class ContactItemComponent {
  @Input() contact: Contacts;
  @Output() contactSelected = new EventEmitter<void>();

  onSelected(){
    this.contactSelected.emit();
  }

  // constructor() {}

  // constructor(contact: Contacts){
  //   this.contact = contact;
  // }
}
