import { Component, OnInit} from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  // @Output() documentWasSelected = new EventEmitter<Document>();

  document:Document[] = [];

  constructor(private documentService: DocumentService){
    
  }

  ngOnInit(){
    this.document = this.documentService.getDocuments();
  }

  // onSelectedDocument(document: Document){
  //   // this.documentWasSelected.emit(document);
  // }
}