import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentSelectedEvent = new EventEmitter<Document>();
  documentListChangedEvent: Subject<Document[]> = new Subject<Document[]>();

  // documentListChangedEvent : Document[] = []
  
  private documents: Document[] = []
  maxDocumentId: number;

  constructor() {
    this.documents = MOCKDOCUMENTS
    this.maxDocumentId = this.getMaxId();
   }


  
  getMaxId(): number {
    let maxId = 0
    
    for(const document of this.documents){
      const currentId = parseInt(document.id);
      if(currentId >  maxId){
        maxId = currentId;
      }
    }
    return maxId;
}


   getDocuments(): Document[]{
    return this.documents.slice();
   }


   getDocument(id: string) : Document{
    for (let document of this.documents) {
      if(document.id == id) {
         return document;
      }
    }
    return null as any;
  }

   getADocument(id: number){
    return this.documents[id];
   }


  //  addDocument(document: Document){
  //   this.documents.push(document);
  //   this.documentListChangedEvent.next(this.documents.slice());
  //  }

  addDocument(newDocument:Document){
    if(!newDocument){
      return;
    }

    this.maxDocumentId++;
    newDocument.id = String(this.maxDocumentId);

    this.documents.push(newDocument);
    const documentsListClone = this.documents.slice();

    this.documentListChangedEvent.next(documentsListClone);
  }


   addDocuments(documents: Document[]){
    this.documents.push(...documents);
    this.documentListChangedEvent.next(this.documents.slice());
   }

   updateDocument(originalDocument: Document, newDocument: Document){
    if(!originalDocument || !newDocument){
      return;
    }

    let pos = this.documents.indexOf(originalDocument)
    if(pos < 0 ){
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    let documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
   }


   deleteDocument(document: Document){
    if(!document){
      return;
    }

    let pos = this.documents.indexOf(document)
    if(pos < 0){
      return;
    }
    this.documents.splice(pos,1);
    let documentListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentListClone)

   }
}
