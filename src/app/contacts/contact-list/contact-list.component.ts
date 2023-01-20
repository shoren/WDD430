import { Component } from '@angular/core';
import { Contacts } from '../contacts.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts:Contacts[] = [
    new Contacts('1','R. Kent Jackson','jacksonk@byui.edu','208-496-3771','../../assets/images/jacksonk.jpg','null'),
    new Contacts('2','Rex Barzee','barzeer@byui.edu','208-496-3768','../../assets/images/barzeer.jpg','null')
  ];
}
