import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  // @Output() contactWasSelected = new E ventEmitter<Contacts>();

  contacts:Contacts[] = [];
  term:string;
  id: any;

  // onContactSelected(contact: Contacts){
  //   this.contactWasSelected.emit(contact);
  // }

  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute,
              private subscription: Subscription,{
                
              }){

  }

  ngOnInit() {
    this.contactService.getContact(this.id);
    
    this.subscription = this.contactService.contactListChangedEvent
    .subscribe((contact: Contacts[]) => {
      this.contacts = contact;
    })
  }

  OnNewContact(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  search(value:string){
    this.term = value;
  }

}
