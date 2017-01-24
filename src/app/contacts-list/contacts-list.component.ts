import { Contact } from './../models/contact';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;

  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.terms$.debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => this.search(term));
  }

  search(term: String) {
    this.contacts = this.contactsService.search(term);
  }

  trackByContacts(index: number, contact: Contact) {
    return contact.id;
  }
}
