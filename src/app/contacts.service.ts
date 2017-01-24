import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Contact } from './models/contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(
    @Inject(Http) private http,
    @Inject("API_ENDPOINT") private apiEndpoint
  ) { }

  search(term: String) {
    return this.http.get(`${this.apiEndpoint}/search?text=${term}`)
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: String) {
    return this.http.get(`${this.apiEndpoint}/contacts/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }

  updateContact(contact: Contact) {
    return this.http.put(`${this.apiEndpoint}/contacts/${contact.id}`, contact);
  }

  getContacts() {
    return this.http.get(`${this.apiEndpoint}/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }
}
