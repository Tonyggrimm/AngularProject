import {Component, Input} from '@angular/core';
import {destination} from "../model/destination.model";
import { DestinationApiResponseService } from '../services/destination-api-response.service';
import {ActivatedRoute,Router} from "@angular/router";
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserIconPipe } from '../pipe/user-icon.pipe';
import { DestinationComponent } from '../destination/destination.component';

@Component({
  selector: 'app-continent-destinations',
  templateUrl: './continent-destinations.component.html',
  styleUrls: ['./continent-destinations.component.scss'],
  standalone:true,
  imports:[CommonModule,UserIconPipe,DestinationComponent]
})
export class ContinentDestinationsComponent {

  @Input() destinations$!: Observable <destination[]>;
  continent!:number;

  constructor(private destinationService: DestinationApiResponseService, private route: ActivatedRoute,public router:Router) {
  }
  
  ngOnInit():void {
    this.continent = +this.route.snapshot.params['continent'];
    this.destinations$=this.destinationService.getDestinationByContinent(this.continent);
  }



}
