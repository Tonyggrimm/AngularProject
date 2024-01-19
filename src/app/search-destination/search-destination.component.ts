import { Component } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import { destination } from '../model/destination.model';
import { DestinationApiResponseService } from '../services/destination-api-response.service';
import { Observable } from 'rxjs';
import { SearchDestinationPipe } from '../pipe/search-destination.pipe';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-destination',
  templateUrl: './search-destination.component.html',
  standalone:true,
  imports:[SearchDestinationPipe,CommonModule,RouterModule,NgbModule,FormsModule]
})
export class SearchDestinationComponent {
  destinations$!:Observable <destination[]>;
  searchtext:any;

  constructor(private destservice:DestinationApiResponseService,private router:Router){}
  
  ngOnInit(): void {
    this.destinations$=this.destservice.getAllDestinations();
  }


}
