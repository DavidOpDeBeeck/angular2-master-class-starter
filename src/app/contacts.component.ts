import { EventBusService } from './event-bus.service';
import { Component } from '@angular/core';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent {

  title: String;

  constructor(private eventBus: EventBusService) {}

  ngOnInit() {
    this.eventBus.observe('appTitleChange')
                 .subscribe(title => this.title = title);
  }
}
