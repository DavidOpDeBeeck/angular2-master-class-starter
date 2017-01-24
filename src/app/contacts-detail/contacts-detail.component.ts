import { ContactsService } from './../contacts.service';
import { Contact } from './../models/contact';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent {

  @Input() contact: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter<void>();

}
