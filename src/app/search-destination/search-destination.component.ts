import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { destination } from '../model/destination.model';
import { DestinationApiResponseService } from '../services/destination-api-response.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-destination',
  templateUrl: './search-destination.component.html',
})
export class SearchDestinationComponent {
  destinations$!:Observable <destination[]>;
  searchtext:any;

  constructor(private destservice:DestinationApiResponseService,private router:Router){}


  ngOnInit(): void {

    this.destinations$=this.destservice.getAllDestinations();
  }


}
