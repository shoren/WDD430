import { Component, OnInit} from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { ActivatedRoute, Router } from '@angular/router';

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
              private route: ActivatedRoute){
  }

  ngOnInit(){
    this.document = this.documentService.getDocuments();
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