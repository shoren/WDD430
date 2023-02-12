import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.params
    .subscribe(
      (params:Params) =>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    );
  }

}
