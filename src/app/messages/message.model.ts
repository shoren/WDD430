import { MessageItemComponent } from "./message-list/message-item/message-item.component";
import { MessageListComponent } from "./message-list/message-list.component";

export class Message{

    public id: string;
    public subject: string;
    public msgText: string;
    public sender: string;
    // public message: MessageListComponent[]
    
    constructor(id: string, subject: string, msgText: string, sender: string,){
        this.id = id;
        this.subject = subject;
        this.msgText = msgText;
        this.sender = sender;
        // this.message = messageList;
    }
    
    }