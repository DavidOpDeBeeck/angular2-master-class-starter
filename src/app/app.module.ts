import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { APP_ROUTES } from './app.routes';
import { ContactsAppComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    ContactsService,
    { provide: "API_ENDPOINT", useValue: "http://localhost:4201/api"}
  ]
})
export class ContactsModule {

}
