import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { destination } from '../model/destination.model';
import { DestinationService } from '../services/destination.service';
@Component({
  selector: 'app-search-destination',
  templateUrl: './search-destination.component.html',
})
export class SearchDestinationComponent {
  destinations!:destination[];
  searchtext:any;

  constructor(private destinationService:DestinationService,private router:Router){}


  ngOnInit(): void {

    this.destinations=this.destinationService.getAllDestinations();
  }


}
