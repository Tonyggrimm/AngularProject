import { Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import { ApiResponseService } from '../services/api-response.service';
import { destination } from '../model/destination.model';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent   {
  @Input()destination!: destination;
  constructor(private ApiResponseService:ApiResponseService, private router: Router) {
  }


  onDetailDestination(){
    this.router.navigateByUrl('membres/' + this.destination.id);
  }

}
