import { Component,OnInit,OnDestroy,Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ApiResponseService } from '../services/api-response.service';
import {Router} from "@angular/router";
import { Subscription,forkJoin,map,mergeMap,switchMap } from 'rxjs';


@Component({
  selector: 'app-liste-destination',
  templateUrl: './liste-destination.component.html',
  styleUrls: ['./liste-destination.component.scss']
})
export class ListeDestinationComponent implements OnInit {

  subscription1$!:Subscription;
  constructor (private ApiResponseService:ApiResponseService ,private route:Router){}

  ngOnInit():void {

}
}
