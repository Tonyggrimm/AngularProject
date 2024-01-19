import { Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import { ApiResponseService } from '../services/api-response.service';
import { destination } from '../model/destination.model';
import { CommonModule } from '@angular/common';
import { UserIconPipe } from '../pipe/user-icon.pipe';



@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  standalone:true,
  imports:[CommonModule,UserIconPipe]
})
export class DestinationComponent   {
  @Input()destination!: destination;
  constructor(private ApiResponseService:ApiResponseService, private router: Router) {
  }


  onDetailDestination(){
    this.router.navigateByUrl('membres/' + this.destination.id);
  }

}
