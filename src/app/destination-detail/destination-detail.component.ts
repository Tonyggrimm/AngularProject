import { Component,Input,OnInit } from '@angular/core';
import { Observable,concatMap,map } from 'rxjs';
import{destination} from "../model/destination.model";
import {ActivatedRoute} from "@angular/router";
import { DestinationApiResponseService } from '../services/destination-api-response.service';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent {
  @Input() destination$!:Observable<destination>;
  constructor(private destinationService: DestinationApiResponseService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const destinationid = +this.route.snapshot.params['id'];
    this.destination$=this.destinationService.getDestinationById(destinationid)
  }

}
