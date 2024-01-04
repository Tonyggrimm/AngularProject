import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contactForm',
  templateUrl: './contactForm.component.html',
})
export class ContactFormComponent implements OnInit{

  closeResult = '';

  newMessageForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,private modalService: NgbModal) {
  }


  ngOnInit() :void{

    this.newMessageForm = this.formBuilder.group({
      prenomUser: [null, [Validators.required]],
      nomUser: [null, [Validators.required]],
      adresseMailUser: [null, [Validators.required,Validators.email]],
      ageUser: [null],
      messageUser: [null, [Validators.required]],
      statusValidate: [null, [Validators.required]],
    },{
      updateOn: 'blur'
    });

    }

    open(content:any) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }



}
