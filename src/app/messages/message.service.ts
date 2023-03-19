import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { max } from 'rxjs';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageChangedEvent = new EventEmitter<Message>();
  messageListChangedEvent: Subject<Message[]> = new Subject<Message[]>();
  maxMessageId: number;



  addMessage(message: Message) {
    this.messages.push(message);
    // this.messageChangedEvent.next(this.messages.slice());
    this.storeMessages();
  }

  private messages: Message[] = []

  constructor( private http: HttpClient) {
    // this.messages = MOCKMESSAGES
    this.getMessages();
  }


  getMaxId(): number {
    let maxId = 0;

    for(let message of this.messages){
      const currentId = parseInt(message.id);
      if(currentId > maxId){
        maxId = currentId;
      }
    }
    return maxId;
  }

  // getMessages(): Message[]{
  //   return this.messages.slice();
  // }

  getMessages(){
    this.http.get<Message[]>('https://shorenfullstack-default-rtdb.firebaseio.com/messages.json')
    .subscribe(
      (message: Message[]) => {
        this.messages = message;
        this.maxMessageId = this.getMaxId();
        this.messages.sort((a, b) => a.id > b.id ? 1 : b.id > a.id ? -1 : 0);
        this.messageListChangedEvent.next(this.messages.slice());
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getMessage(id:string) : Message {
    for (const message of this.messages){
      if(message.id == id){
        return message;
      }
    }
    return null as any;
  }


  storeMessages() {
    const messages = this.messages.slice();
    const data = JSON.stringify(messages);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  
    this.http.put('https://shorenfullstack-default-rtdb.firebaseio.com/', data, {headers: headers})
      .subscribe(
        () => {
          this.messageListChangedEvent.next(messages.slice());
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

}
