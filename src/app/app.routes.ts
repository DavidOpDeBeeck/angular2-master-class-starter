import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

export const APP_ROUTES : Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contact/:id', component: ContactsDetailComponent },
  { path: 'contact/:id/edit', component: ContactsEditorComponent },
  { path: '**', redirectTo: '/' }
];