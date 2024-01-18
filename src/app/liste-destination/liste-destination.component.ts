import { Component,OnInit,OnDestroy,Input } from '@angular/core';
import { DestinationApiResponseService } from '../services/destination-api-response.service';
import { Observable } from 'rxjs';
import { destination } from '../model/destination.model';
import {Router} from "@angular/router";



@Component({
  selector: 'app-liste-destination',
  templateUrl: './liste-destination.component.html',
  styleUrls: ['./liste-destination.component.scss']
})
export class ListeDestinationComponent implements OnInit {


  @Input() destinations$!:Observable<destination[]>

  constructor(private dest: DestinationApiResponseService, private router: Router) {
  }

  ngOnInit(): void {
  this.destinations$=this.dest.getAllDestinations()
  }


  onDetailDestination(id:number){
      this.router.navigateByUrl('membres/' + id);
   }

}
