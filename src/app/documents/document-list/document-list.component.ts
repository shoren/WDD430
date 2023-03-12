import { Component, OnInit} from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  // @Output() documentWasSelected = new EventEmitter<Document>();

  document:Document[] = [];

  constructor(private documentService: DocumentService,
              private router: Router,
              private route: ActivatedRoute,
              private subscription: Subscription){
  }

  ngOnInit() {
    this.documentService.getDocuments();
    
    this.subscription = this.documentService.documentListChangedEvent
    .subscribe((documentsList: Document[]) => {
      this.document = documentsList;
    })
  }

  OnNewDocument(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEditDocument(index: number){
    this.documentService.startedEditting.next(index);
  }

  // onSelectedDocument(document: Document){
  //   // this.documentWasSelected.emit(document);
  // }
}