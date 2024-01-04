import {Component, OnInit} from '@angular/core';
import {ContactModel} from "../model/contact.model";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit{

  contacts!: ContactModel[];
  constructor(private contactsService: ContactService) {
  }
  ngOnInit(): void{
    this.contacts= this.contactsService.getAllContact();
  }
}
