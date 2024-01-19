import { Component,Input } from '@angular/core';
import { Observable} from 'rxjs';
import{destination} from "../model/destination.model";
import {ActivatedRoute} from "@angular/router";
import { DestinationApiResponseService } from '../services/destination-api-response.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class DestinationDetailComponent {
  @Input() destination$!:Observable<destination>;

  constructor(private destinationService: DestinationApiResponseService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    const destinationid = +this.route.snapshot.params['id'];
    this.destination$=this.destinationService.getDestinationById(destinationid)
  }

}
