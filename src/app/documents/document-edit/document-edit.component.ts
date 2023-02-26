import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentListComponent } from '../document-list/document-list.component';
import { FormsModule } from '@angular/forms';
import { Document } from '../document.model';
import { NgForm } from '@angular/forms';
import { DocumentService } from '../document.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  @ViewChild('f') documentForm: NgForm;
  subscription: Subscription
 
  // @ViewChild('nameInput') nameInputRef: ElementRef;

  originalDocument: Document;
  document: Document;
  
  id: string;
  name: any;
  description: any;
  url: any;
  children: any;
  editMode = false;
  editedItemIndex: number;
  editedItem: Document;

  
constructor(
  private documentService: DocumentService,
  private router: Router,
  private route: ActivatedRoute) {

}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      const id = params['id'];

      if(!id){
        this.editMode = false;
        return;
      }

      this.originalDocument = this.documentService.getADocument(id);

      if(!this.originalDocument){
        return;
      }

      this.editMode = true;
      this.document = JSON.parse(JSON.stringify(this.originalDocument));
;    })
  }

  // ngOnInit(){
  //   this.subscription = this.documentService.startedEditting
  //   .subscribe(
  //     (index: number) => {
  //       this.editedItemIndex = index;
  //       this.editMode = true;
  //       this.editedItem = this.documentService.getADocument(index);
  //       this.documentForm.setValue({
  //         name: this.editedItem.name,
  //         description: this.editedItem.description,
  //         url: this.editedItem.url
  //       })
  //     }
  //   );
  // }

 

  onCancel(){
    this.router.navigate(['/documents'])
  } 

  onSubmit(form: NgForm){
    const value = form.value;
    const newDocument = new Document(value.id,value.title,value.description,value.url,value);

    this.documentService.addDocument(newDocument)
    console.log(value.title)

    if(this.editMode == true){
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument)
    }

    this.router.navigate(['/documents']);
  }

  // onAddDocument(){
  //   const docName = this.nameInputRef.nativeElement.value;
  //   const docDescription = this.descriptionInputRef.nativeElement.value;
  //   const docUrl = this.UrlInputRef.nativeElement.value;
  //   const newDocument = new Document(docName, docDescription,docUrl);
  //   this.documentAdded.emit(newDocument);
  // }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

}
