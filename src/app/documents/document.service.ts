import { Component, EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

@Component({
  providers:[DocumentService]
})


export class DocumentService {
  documentSelectedEvent = new EventEmitter<Document>();
  documentListChangedEvent: Subject<Document[]> = new Subject<Document[]>();
  startedEditting = new Subject<number>()
  // documentListChangedEvent : Document[] = []
  
  
  private documents: Document[] = [];
  maxDocumentId: number;

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


  //  getDocuments(): Document[]{
  //   return this.documents.slice();
  //  }


  constructor(private http: HttpClient) {
    // this.documents = MOCKDOCUMENTS
    // this.maxDocumentId = this.getMaxId();
    this.getDocuments();

   }


   getDocuments(){
    this.http.get<Document[]>('https://shorenfullstack-default-rtdb.firebaseio.com/documents.json/')
    .subscribe(
      (documents: Document[]) => {
        this.documents = documents;
        this.maxDocumentId = this.getMaxId();
        this.documents.sort((a,b) => (a.name > b.name) ? 1: -1)
        this.documentListChangedEvent.next(this.documents.slice());
      },
      (error: any) => {
        console.error(error);
      }
    );
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

   
   storeDocuments() {
    const documents = this.documents.slice();
    const data = JSON.stringify(documents);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  
    this.http.put('https://shorenfullstack-default-rtdb.firebaseio.com/', data, {headers: headers})
      .subscribe(
        () => {
          this.documentListChangedEvent.next(documents.slice());
        },
        (error: any) => {
          console.log(error);
        }
      );
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
    this.storeDocuments();
  }


   addDocuments(documents: Document[]){
    this.documents.push(...documents);
    this.documentListChangedEvent.next(this.documents.slice());
   }

   updateDocument(originalDocument: Document, newDocument: Document){
    if(!originalDocument || !newDocument){
      return;
      
    }
    console.log('updateDocument');

    let pos = this.documents.indexOf(originalDocument)
    if(pos < 0 ){
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    let documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
    this.storeDocuments();
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
    this.documentListChangedEvent.next(documentListClone);
    this.storeDocuments();

   }
}
