import { Component, Input, OnInit } from '@angular/core';
import { Contacts } from '../../contacts.model';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})


export class ContactItemComponent {
  @Input() contact: Contacts;
  @Input() index: number;

  ngOnInit(){

  }
  
}
