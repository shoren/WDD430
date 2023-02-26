import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Contacts } from '../contacts.model';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent {
  id: number;
  editMode = false;
  groupContacts: any;

  originalContact: Contacts;
  contact: Contacts

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router){

  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      const id = params['id'];

      if(!id){
        this.editMode = false;
        return;
      }

      this.originalContact = this.contactService.getAContact(id);

      if(!this.originalContact){
        return;
      }

      this.editMode = true;
      this.contact = JSON.parse(JSON.stringify(this.originalContact));
;    })
  }


  onRemoveItem(id: number){

  }

  onCancel(){
    this.router.navigate(['/contacts'])
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newContact = new Contacts(value.id,value.name,value.email,value.phone,value.imageUrl,value.Contacts);

    this.contactService.addContact(newContact)
    console.log(value.name)

    if(this.editMode == true){
      this.contactService.updateContact(this.originalContact, newContact);
    } else {
      this.contactService.addContact(newContact)
    }

    this.router.navigate(['/contacts'])
  }

}
