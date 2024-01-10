import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tpApiDestination} from '../model/teleportApiDestinations.model';

@Injectable({
  providedIn: 'root'
})
export class TeleportApiDestinationsService {
  private baseUrl = 'https://api.teleport.org/api/urban_areas';


  constructor(private http:HttpClient) {}

  getApiDestinationMainImg(cityName:string): Observable<tpApiDestination> {

    return (this.http.get<tpApiDestination>(`${this.baseUrl}`+"/slug:"+cityName, {responseType:'json'}))//['photos'][0]['image']['mobile']//
  }


  //getApiDestinationName(){
 // }


  //getApiDestinationCountry

  //getApiDestinationContinent

  //getApiDestinationSecondaryImg

  //getTenRandomDestinations
}

