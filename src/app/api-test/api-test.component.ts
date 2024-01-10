import { Component,OnInit } from '@angular/core';
import {tpApiDestination} from '../model/teleportApiDestinations.model';
import { TeleportApiDestinationsService } from '../services/teleportApiDestinations.service';
import { ApiResponseService } from '../services/api-response.service';

@Component({
  selector: 'app-apitest',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss']
})
export class ApiTestComponent implements OnInit {
  ApiiDestinations!:tpApiDestination;
  counter:number = 0;

  constructor(private ApiResponseService:ApiResponseService) {}

  ngOnInit(): void {
    this.ApiResponseService.getApiDestinationMainUrl().subscribe((ApiDestinations) => {
      console.log(JSON.stringify(ApiDestinations['photos'][0]['image']['mobile']));
    });
  }
}
