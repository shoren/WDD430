import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DocumentService } from '../document.service';
import { Document } from '../document.model';



@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent {
  document:Document;
  id: number;

  constructor(private documentService: DocumentService,
              private route: ActivatedRoute,
              private router: Router){

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

  onEditDocument(){
    // this.router.navigate(['id'],{relativeTo: this.route});
    this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route});
  }


  
}
