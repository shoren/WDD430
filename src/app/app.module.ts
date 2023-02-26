import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { MessageItemComponent } from './messages/message-list/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { DocumentItemComponent } from './documents/document-list/document-item/document-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ContactStartComponent } from './contacts/contact-start/contact-start.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
// import { DocumentEditComponentComponent } from './documents/document-edit-component/document-edit-component.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentStartComponent } from './documents/document-start/document-start.component';
import { DocumentService } from './documents/document.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentDetailComponent,
    MessageItemComponent,
    MessageEditComponent,
    MessageListComponent,
    DocumentItemComponent,
    DropdownDirective,
    ContactStartComponent,
    ContactEditComponent,
    // DocumentEditComponentComponent,
    DocumentEditComponent,
    DocumentStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { };