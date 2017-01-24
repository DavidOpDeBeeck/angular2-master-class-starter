import { EventBusService } from '../event-bus.service';
import { Contact } from './../models/contact';
import { ContactsService } from './../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact : Contact;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private contactsService: ContactsService,
    private eventBus: EventBusService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id)
      .subscribe(contact => {
        this.contact = contact;
        this.eventBus.emit("appTitleChange", contact.name);
      });
  }

  navigateToEditor(contact) {
    this.router.navigate(["/contact", contact.id, "edit"]);
  }

  navigateToList() {
    this.router.navigate([""]);
  }
}
