import { Component } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  message: Message[] = [];

  constructor(private messageService: MessageService){

  }

  ngOnInit(){
    this.messageService.getMessages();
  }

}
