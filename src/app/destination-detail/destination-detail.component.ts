import { Component,Input,OnInit } from '@angular/core';

import {Router} from "@angular/router";
import{destination} from "../model/destination.model";
import {ActivatedRoute} from "@angular/router";
import {DestinationService} from "../services/destination.service";

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent {
  @Input() destination!: destination;
  constructor(private destinationService: DestinationService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.destinationService.islogg=false;
    const destinationid = +this.route.snapshot.params['id'];
    this.destination= this.destinationService.getDestinationBy(destinationid);

  }

}
