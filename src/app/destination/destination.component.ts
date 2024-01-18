import { Component,OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";
import { ApiResponseService } from '../services/api-response.service';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent   {
 // @Input() destination!: tpApiDestination;
  constructor(private ApiResponseService:ApiResponseService, private router: Router) {
  }


 // onDetailDestination(){
  //  this.router.navigateByUrl('membres/' + this.destination.id);
 // }

}
