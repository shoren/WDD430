import { Component, Input, OnInit} from '@angular/core';
import { Message } from '../../message.model';
import { MessageService } from '../../message.service';
import { ContactService } from 'src/app/contacts/contact.service';
import { Contacts } from 'src/app/contacts/contacts.model';
import { DocumentService } from 'src/app/documents/document.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit{
  @Input() message: Message;
  messageSender: string;
  subscribe: Subscription;

  constructor(private contactService: ContactService) {}
  // ngOnInit() {
  //    const contact: Contacts = this.contactService.getContact(this.message.sender);
  //    this.messageSender = contact.name;
  // }

  ngOnInit(){
    let contact: Contacts = this.contactService.getContact(this.message.sender);
    this.messageSender = contact.name;
    this.subscribe = this.contactService.contactListChangedEvent.subscribe(
      ()=>{
        contact = this.contactService.getContact(this.message.sender);
        this.messageSender = contact.name;
      }
    )
}
}
