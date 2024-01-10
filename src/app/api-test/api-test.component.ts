import { Component,OnInit,OnDestroy } from '@angular/core';
import {tpApiDestination} from '../model/teleportApiDestinations.model';
import { TeleportApiDestinationsService } from '../services/teleportApiDestinations.service';
import { ApiResponseService } from '../services/api-response.service';
import {Router} from "@angular/router";
import { LiteralMap, STRING_TYPE } from '@angular/compiler';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-apitest',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss']
})
export class ApiTestComponent implements OnInit {
  ApiiDestinations!:tpApiDestination[];
  subscription1$!:Subscription;
  counter:number = 0;
  arrayName!:string


  constructor(private ApiResponseService:ApiResponseService,private router: Router) {}

  ngOnInit(): void {
    this.arrayName="ua:item";
    this.subscription1$=this.ApiResponseService.getApiDestinationMainUrl().subscribe((ApiDestinations) => {
      this.ApiiDestinations=ApiDestinations._links[this.arrayName].map((currentElement:object,index:number)=>({
        id:index,
        name: ApiDestinations._links[this.arrayName][index]["name"],

       /* country: ApiDestinations.getApiDestinationComplexUrl(ApiDestinations.getApiDestinationMainUrl()["ua:item"][0]["name"])
        ["ua:countries"][0]["name"],

        continent: ApiDestinations.getApiDestinationComplexUrl(ApiDestinations.getApiDestinationMainUrl()["ua:item"][0]["name"])
        ["ua:continent"]["name"],

        MainImageUrl:  ApiDestinations.getApiDestinationImages(ApiDestinations.getApiDestinationMainUrl()["ua:item"][0]["name"])
        ["photos"][0]["image"]["web"],

        secondaryImageUrl:ApiDestinations.getApiDestinationImages(ApiDestinations.getApiDestinationMainUrl()["ua:item"][0]["name"])
        ["photos"][0]["image"]["mobile"],

*/
      }))

    });
  }

  ngOnDestroy(){
    this.subscription1$.unsubscribe();
  }

 /* onDetailDestination(){
    this.router.navigateByUrl('membres/' + this.ApiiDestinations.id);
  }*/
}


