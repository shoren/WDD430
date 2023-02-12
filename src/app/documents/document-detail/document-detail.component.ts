import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';


@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent {
  document:Document;
  id: number;

  constructor(private documentService: DocumentService,
              private router: Router,
              private route: ActivatedRoute){

  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.document = this.documentService.getADocument(this.id);
      }
    );
  }


  
}
