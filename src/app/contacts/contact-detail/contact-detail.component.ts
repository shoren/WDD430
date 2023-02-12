import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';

import { ContactService } from '../contact.service';
import { Contacts } from '../contacts.model';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
  contact:Contacts;
  id: number;

  constructor(private contactService: ContactService,
              private route:ActivatedRoute,
              private router: Router){

    }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.contact = this.contactService.getAContact(this.id);
      }
    );
  }


  onEditContact(){
    // this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route});
  }
}
