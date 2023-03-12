import { Component, OnDestroy, OnInit } from '@angular/core';
import { Document } from './document.model';
import { DocumentService } from './document.service';
import { Subscription } from "rxjs"

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers: [DocumentService]
})
export class DocumentsComponent implements OnInit, OnDestroy {
  selectedDocument: Document;
  title = 'cms';

  document: Document [];
  private docChangedSub: Subscription;

  constructor(private documentService: DocumentService){  }

  // ngOnInit(){
  //   this.document = this.documentService.getDocuments();
  //   this.documentService.documentSelectedEvent
  //   .subscribe(
  //     (document: Document) => {
  //       this.selectedDocument = document;
  //     }
  //   );
  // }

  onDocumentAdded(document:Document){
    this.document.push(document);
  }

  ngOnInit(){
    this.documentService.getDocuments();
    // this.documentService.documentSelectedEvent
    this.docChangedSub = this.documentService.documentListChangedEvent
    .subscribe(
      (document: Document[]) => {
        this.document = document;
      }
    );
  }

  ngOnDestroy(): void {
    this.docChangedSub.unsubscribe();
  }
}