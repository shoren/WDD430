import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.params
    .subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.editMode = params['id']  !=null;
      }
    );
  }

  // onAddDocument(){
  //   const docName = this.nameInputRef.nativeElement.value;
  //   const docDescription = this.descriptionInputRef.nativeElement.value;
  //   const docUrl = this.UrlInputRef.nativeElement.value;
  //   const newDocument = new Document(docName, docDescription,docUrl);
  //   this.documentAdded.emit(newDocument);
  // }

}
