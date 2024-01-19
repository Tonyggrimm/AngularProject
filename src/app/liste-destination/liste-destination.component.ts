import { Component,OnInit,Input } from '@angular/core';
import { DestinationApiResponseService } from '../services/destination-api-response.service';
import { Observable } from 'rxjs';
import { destination } from '../model/destination.model';
import {Router, RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { DestinationComponent } from '../destination/destination.component';



@Component({
  selector: 'app-liste-destination',
  templateUrl: './liste-destination.component.html',
  styleUrls: ['./liste-destination.component.scss'],
  standalone:true,
  imports:[CommonModule,RouterModule,DestinationComponent]
})
export class ListeDestinationComponent implements OnInit {


  @Input() destinations$!:Observable<destination[]>

  constructor(private dest: DestinationApiResponseService, private router: Router) {}

  ngOnInit(): void {
    this.destinations$=this.dest.getAllDestinations()
  }


  onDetailDestination(id:number){
    this.router.navigateByUrl('membres/' + id);
   }

}
