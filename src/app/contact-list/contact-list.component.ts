import {Component, OnInit} from '@angular/core';
import {ContactModel} from "../model/contact.model";
import {ContactService} from "../services/contact.service";
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  standalone:true,
  imports:[CommonModule,ContactComponent]
})

export class ContactListComponent implements OnInit{

  contacts!: ContactModel[];

  constructor(private contactsService: ContactService) {
  }

  ngOnInit(): void{
    this.contacts= this.contactsService.getAllContact();
  }
}
