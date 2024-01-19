import {Component,Input} from '@angular/core';
import {ContactModel} from "../model/contact.model";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone:true,
  imports:[CommonModule]
})

export class ContactComponent{

  @Input()contact!: ContactModel;



}
