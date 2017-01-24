/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactsService } from './contacts.service';
import { CONTACT_DATA } from './data/contact-data'

describe('ContactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactsService]
    });
  });

  it('should return the contact data', inject([ContactsService], (service: ContactsService) => {
    //expect(service.getContacts()).toBe(CONTACT_DATA);
  }));
});
