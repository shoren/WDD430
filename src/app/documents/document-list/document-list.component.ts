import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  @Output() documentWasSelected = new EventEmitter<Document>();

  document:Document[] = [
    new Document('1','Name go here please','This','www','idk'),
    new Document('2','go Name here please','This is','www.go','idk'),
    new Document('3','here Name go please','This is a','www.google','idk'),
    new Document('4','please Name go here','This is a description','www.google.com','idk')
  ];

  onSelectedDocument(document: Document){
    this.documentWasSelected.emit(document);
  }
}