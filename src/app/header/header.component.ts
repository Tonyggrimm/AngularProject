import { Component,OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {DestinationService} from "../services/destination.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private service:DestinationService,private router:Router) {

  }


  press() {
    this.service.islogg = true;
  }




  onAddNewDestination() {
    this.router.navigateByUrl('/newDestinationForm');
  }

}
